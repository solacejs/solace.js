import EventEmitter from "events";
import Client from "./Client";
import Constants from "../config/Constants";
import WebSocket from "ws";
import OpCodes from "../config/OpCodes";
import SolaceError from "../util/SolaceError";
import EventHandler from "../util/EventHandler";

export default class WebsocketClient extends EventEmitter {

    private gateway: string | null = null;
    private _ws: WebSocket | null = null;
    private heartbeatInterval: NodeJS.Timeout | null = null;

    constructor(private client: Client) {
        super();
    }

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
                        switch(t) {
                            case "READY":
                                EventHandler.READY(this.client, d);
                                break;
                            case "MESSAGE_CREATE":
                                EventHandler.MESSAGE_CREATE(this.client, d);
                                break;
                        }
                        break;
                }
            });

            this._ws.on("close", (code) => {
                this.reconnect();
                throw new SolaceError(code);
            });
        } catch (error) {
            console.error("Error connecting to Discord Gateway:", error);
            this.reconnect();
        }
    }

    private reconnect() {
        // Stop sending heartbeats
        this.stopHeartbeat();
        // Clear the WebSocket instance
        this._ws = null;
        // Reconnect to discord
        setTimeout(() => this.connect(), 5000);
    }

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

    private startHeartbeat(interval: number) {
        this.heartbeatInterval = setInterval(() => {
            this.sendHeartbeat();
        }, interval);
    }

    private stopHeartbeat() {
        if(this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    }

    private sendHeartbeat() {
        this._ws?.send(JSON.stringify({ op: 1, d: null }));
    }
}