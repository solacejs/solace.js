import EventEmitter from "events";
import { Client } from "./Client";
import { Constants } from "../config/Constants";
import WebSocket from "ws";
import { OpCodes } from "../config/OpCodes";
import { SolaceError } from "../util/SolaceError";
import { EventHandler } from "../util/EventHandler";
import { Message } from "../structures/Message";

/**
 * A WebSocket client for connecting to the Discord Gateway and handling communication.
 */
export class WebsocketClient extends EventEmitter {

    /**
     *  Represents the URL of the Discord Gateway to which the WebSocket client will establish a connection
     */
    private gateway: string | null = null;
    /**
     * Represents the WebSocket instance used for communication with the Discord Gateway
     */
    private _ws: WebSocket | null = null;

    /**
     * represents a Node.js timeout object that is used to periodically send heartbeat messages to the Discord Gateway to maintain the connection.
     */
    private heartbeatInterval: NodeJS.Timeout | null = null;

    /**
     * Creates a new WebsocketClient instance.
     * @param {Client} client - The Discord client instance.
     */
    constructor(private client: Client) {
        super();
    }

    /**
     * Establishes a connection to the Discord Gateway.
     */
    public async connect() {
        try {
            const res = await fetch(Constants.GATEWAY);
            const data = await res.json();

            this.gateway = data.url;
            this._ws = new WebSocket(this.gateway!);

            this._ws.on("open", () => {
                this.identify();
            });

            this._ws.on("message", (data) => {
                const packet = JSON.parse(data.toString());
                const { op, t, d } = packet;

                switch (op) {
                    case OpCodes.HELLO:
                        const { heartbeat_interval } = d;
                        this.startHeartbeat(heartbeat_interval);
                        break;
                    case OpCodes.DISPATCH:
                        switch (t) {
                            case "CHANNEL_CREATE":
                                EventHandler.CHANNEL_CREATE(this.client, d);
                                break;
                            case "MESSAGE_CREATE":
                                EventHandler.MESSAGE_CREATE(this.client, d);
                                break;
                            case "READY":
                                EventHandler.READY(this.client, d);
                                break;
                        }
                        break;
                }
            });

            this._ws.on("close", (code) => {
                this.reconnect();
                // throw new SolaceError(code);
                console.log("ERROR", code);
            });
        } catch (error) {
            console.error("Error connecting to Discord Gateway:", error);
            this.reconnect();
        }
    }

    /**
     * Send data to the discord websocket.
     */
    public send({ op, d }: { op: number, d?: any }) {
        this._ws?.send(JSON.stringify({ op, d }));
    }

    /**
     * Initiates the reconnection process to the Discord Gateway.
     * Stops sending heartbeats, clears the WebSocket instance, and attempts to reconnect after a delay.
     */
    private reconnect() {
        // Stop sending heartbeats
        this.stopHeartbeat();
        // Clear the WebSocket instance
        this._ws = null;
        // Reconnect to Discord after a delay (e.g., 5 seconds)
        setTimeout(() => this.connect(), 5000);
    }

    /**
     * Sends the IDENTIFY payload to the Discord Gateway upon establishing a connection.
     */
    private identify() {
        const payload = {
            op: OpCodes.IDENTIFY,
            d: {
                token: this.client.options.token,
                intents: this.client.options.intents,
                properties: {
                    $os: "linux",
                    $browser: "solace.js",
                    $device: "solace.js"
                }
            },
        }

        this._ws?.send(JSON.stringify(payload));

        // Send the first heartbeat immediately after identify
        this.sendHeartbeat();
    }

    /**
     * Starts sending heartbeats at the specified interval.
     * @param {number} interval - The heartbeat interval in milliseconds.
     */
    private startHeartbeat(interval: number) {
        this.heartbeatInterval = setInterval(() => {
            this.sendHeartbeat();
        }, interval);
    }

    /**
     * Stops sending heartbeats.
     */
    private stopHeartbeat() {
        if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    }

    /**
     * Sends a heartbeat to the Discord Gateway.
     */
    private sendHeartbeat() {
        this._ws?.send(JSON.stringify({ op: 1, d: null }));
    }
}
