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
exports.Client = void 0;
const events_1 = __importDefault(require("events"));
const WebsocketClient_1 = require("./WebsocketClient");
const GatewayIntents_1 = require("../config/GatewayIntents");
const Constants_1 = require("../config/Constants");
/**
 * Represents a client that interacts with a WebSocket and communicates with discord.
 */
class Client extends events_1.default {
    /**
     * Creates a new Client instance.
     * @param {ClientOptions} options - The client configuration options.
     */
    constructor(options) {
        super();
        this.options = options;
        /**
         * The WebSocket client used by the main client.
         */
        this.ws = null;
        /**
         * The user associated with the client if logged in.
         */
        this.user = null;
        // Combine the specified Gateway Intents if they are provided as an array.
        if (Array.isArray(options.intents))
            this.options.intents = GatewayIntents_1.GatewayIntents.combineIntents(...options.intents);
        // Initialize the WebSocket client.
        this.ws = new WebsocketClient_1.WebsocketClient(this);
    }
    /**
     * Register a one-time event listener for the specified event.
     * @param {K} event - The event name.
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns The current Client instance.
     */
    once(event, listener) {
        return super.once(event, listener);
    }
    /**
     * Register an event listener for the specified event.
     * @param {K} event - The event name.
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns {this} - The current Client instance.
     */
    on(event, listener) {
        return super.on(event, listener);
    }
    /**
     * Asynchronously log in the client by establishing a WebSocket connection.
     */
    login() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.ws) === null || _a === void 0 ? void 0 : _a.connect());
        });
    }
    /**
     * Asynchronously creates a new message in a specified channel.
     * @param channelId - The unique identifier of the target channel where the message will be sent.
     * @param message - The content of the message to be sent.
     * @throws {Error} If an error occurs during the message creation process.
     */
    createMessage(channelId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(`${Constants_1.Constants.API}/channels/${channelId}/messages`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bot ${this.options.token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        content: message
                    })
                });
            }
            catch (err) {
                throw new Error(`Failed to create message: ${err}`);
            }
        });
    }
    fetchGuild(guildId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${Constants_1.Constants.API}/guilds/${guildId}`, {
                headers: {
                    Authorization: `Bot ${this.options.token}`,
                    "Content-Type": "application/json"
                }
            });
            return yield res.json();
        });
    }
    fetchChannel(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${Constants_1.Constants.API}/channels/${channelId}`, {
                headers: {
                    Authorization: `Bot ${this.options.token}`,
                    "Content-Type": "application/json"
                }
            });
            return yield res.json();
        });
    }
}
exports.Client = Client;
