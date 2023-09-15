"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../structures/User"));
/**
 * A utility class for handling Discord events received by the client.
 */
class EventHandler {
    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "READY" event.
     */
    static READY(client, data) {
        // Initialize the client's user with the provided data.
        client.user = new User_1.default(data.user);
        // Emit a "ready" event with the client as the argument.
        client.emit("ready", client);
    }
    /**
     * Handles the "MESSAGE_CREATE" event by.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "MESSAGE_CREATE" event.
     */
    static MESSAGE_CREATE(client, data) {
        // Emit a "messageCreate" event with the received data.
        client.emit("messageCreate", data);
    }
}
exports.default = EventHandler;
