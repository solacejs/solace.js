"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketClient = void 0;
const events_1 = __importDefault(require("events"));
const Constants_1 = require("../config/Constants");
const ws_1 = __importDefault(require("ws"));
const OpCodes_1 = require("../config/OpCodes");
const EventHandler_1 = require("../util/EventHandler");
/**
 * A WebSocket client for connecting to the Discord Gateway and handling communication.
 */
class WebsocketClient extends events_1.default {
    /**
     * Creates a new WebsocketClient instance.
     * @param {Client} client - The Discord client instance.
     */
    constructor(client) {
        super();
        this.client = client;
        /**
         *  Represents the URL of the Discord Gateway to which the WebSocket client will establish a connection
         */
        this.gateway = null;
        /**
         * Represents the WebSocket instance used for communication with the Discord Gateway
         */
        this._ws = null;
        /**
         * represents a Node.js timeout object that is used to periodically send heartbeat messages to the Discord Gateway to maintain the connection.
         */
        this.heartbeatInterval = null;
    }
    /**
     * Establishes a connection to the Discord Gateway.
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(Constants_1.Constants.GATEWAY);
                const data = yield res.json();
                this.gateway = data.url;
                this._ws = new ws_1.default(this.gateway);
                this._ws.on("open", () => {
                    this.identify();
                });
                this._ws.on("message", (data) => {
                    const packet = JSON.parse(data.toString());
                    const { op, t, d } = packet;
                    switch (op) {
                        case OpCodes_1.OpCodes.HELLO:
                            const { heartbeat_interval } = d;
                            this.startHeartbeat(heartbeat_interval);
                            break;
                        case OpCodes_1.OpCodes.DISPATCH:
                            switch (t) {
                                case "CHANNEL_CREATE":
                                    EventHandler_1.EventHandler.CHANNEL_CREATE(this.client, d);
                                    break;
                                case "MESSAGE_CREATE":
                                    EventHandler_1.EventHandler.MESSAGE_CREATE(this.client, d);
                                    break;
                                case "READY":
                                    EventHandler_1.EventHandler.READY(this.client, d);
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
            }
            catch (error) {
                console.error("Error connecting to Discord Gateway:", error);
                this.reconnect();
            }
        });
    }
    /**
     * Initiates the reconnection process to the Discord Gateway.
     * Stops sending heartbeats, clears the WebSocket instance, and attempts to reconnect after a delay.
     */
    reconnect() {
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
    identify() {
        var _a;
        const payload = {
            op: OpCodes_1.OpCodes.IDENTIFY,
            d: {
                token: this.client.options.token,
                intents: this.client.options.intents,
                properties: {
                    $os: "linux",
                    $browser: "solace.js",
                    $device: "solace.js"
                }
            },
        };
        (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(payload));
        // Send the first heartbeat immediately after identify
        this.sendHeartbeat();
    }
    /**
     * Starts sending heartbeats at the specified interval.
     * @param {number} interval - The heartbeat interval in milliseconds.
     */
    startHeartbeat(interval) {
        this.heartbeatInterval = setInterval(() => {
            this.sendHeartbeat();
        }, interval);
    }
    /**
     * Stops sending heartbeats.
     */
    stopHeartbeat() {
        if (this.heartbeatInterval)
            clearInterval(this.heartbeatInterval);
    }
    /**
     * Sends a heartbeat to the Discord Gateway.
     */
    sendHeartbeat() {
        var _a;
        (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify({ op: 1, d: null }));
    }
}
exports.WebsocketClient = WebsocketClient;
