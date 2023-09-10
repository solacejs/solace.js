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
const events_1 = __importDefault(require("events"));
const Constants_1 = __importDefault(require("../config/Constants"));
const ws_1 = __importDefault(require("ws"));
const OpCodes_1 = __importDefault(require("../config/OpCodes"));
const SolaceError_1 = __importDefault(require("../util/SolaceError"));
const EventHandler_1 = __importDefault(require("../util/EventHandler"));
class WebsocketClient extends events_1.default {
    constructor(client) {
        super();
        this.client = client;
        this.gateway = null;
        this._ws = null;
        this.heartbeatInterval = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(Constants_1.default.GATEWAY);
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
                        case OpCodes_1.default.HELLO:
                            const { heartbeat_interval } = d;
                            this.startHeartbeat(heartbeat_interval);
                            break;
                        case OpCodes_1.default.DISPATCH:
                            switch (t) {
                                case "READY":
                                    EventHandler_1.default.READY(this.client, d);
                                    break;
                                case "MESSAGE_CREATE":
                                    EventHandler_1.default.MESSAGE_CREATE(this.client, d);
                                    break;
                            }
                            break;
                    }
                });
                this._ws.on("close", (code) => {
                    this.reconnect();
                    throw new SolaceError_1.default(code);
                });
            }
            catch (error) {
                console.error("Error connecting to Discord Gateway:", error);
                this.reconnect();
            }
        });
    }
    reconnect() {
        // Stop sending heartbeats
        this.stopHeartbeat();
        // Clear the WebSocket instance
        this._ws = null;
        // Reconnect to discord
        setTimeout(() => this.connect(), 5000);
    }
    identify() {
        var _a;
        const payload = {
            op: OpCodes_1.default.IDENTIFY,
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
    startHeartbeat(interval) {
        this.heartbeatInterval = setInterval(() => {
            this.sendHeartbeat();
        }, interval);
    }
    stopHeartbeat() {
        if (this.heartbeatInterval)
            clearInterval(this.heartbeatInterval);
    }
    sendHeartbeat() {
        var _a;
        (_a = this._ws) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify({ op: 1, d: null }));
    }
}
exports.default = WebsocketClient;
