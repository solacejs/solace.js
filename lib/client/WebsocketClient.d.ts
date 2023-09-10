/// <reference types="node" />
import EventEmitter from "events";
import Client from "./Client";
export default class WebsocketClient extends EventEmitter {
    private client;
    private gateway;
    private _ws;
    private heartbeatInterval;
    constructor(client: Client);
    connect(): Promise<void>;
    private reconnect;
    private identify;
    private startHeartbeat;
    private stopHeartbeat;
    private sendHeartbeat;
}
