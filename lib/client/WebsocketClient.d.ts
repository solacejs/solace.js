/// <reference types="node" />
import EventEmitter from "events";
import { Client } from "./Client";
/**
 * A WebSocket client for connecting to the Discord Gateway and handling communication.
 */
export declare class WebsocketClient extends EventEmitter {
    private client;
    /**
     *  Represents the URL of the Discord Gateway to which the WebSocket client will establish a connection
     */
    private gateway;
    /**
     * Represents the WebSocket instance used for communication with the Discord Gateway
     */
    private _ws;
    /**
     * represents a Node.js timeout object that is used to periodically send heartbeat messages to the Discord Gateway to maintain the connection.
     */
    private heartbeatInterval;
    /**
     * Creates a new WebsocketClient instance.
     * @param {Client} client - The Discord client instance.
     */
    constructor(client: Client);
    /**
     * Establishes a connection to the Discord Gateway.
     */
    connect(): Promise<void>;
    /**
     * Send data to the discord websocket.
     */
    send({ op, d }: {
        op: number;
        d?: any;
    }): void;
    /**
     * Initiates the reconnection process to the Discord Gateway.
     * Stops sending heartbeats, clears the WebSocket instance, and attempts to reconnect after a delay.
     */
    private reconnect;
    /**
     * Sends the IDENTIFY payload to the Discord Gateway upon establishing a connection.
     */
    private identify;
    /**
     * Starts sending heartbeats at the specified interval.
     * @param {number} interval - The heartbeat interval in milliseconds.
     */
    private startHeartbeat;
    /**
     * Stops sending heartbeats.
     */
    private stopHeartbeat;
    /**
     * Sends a heartbeat to the Discord Gateway.
     */
    private sendHeartbeat;
}
