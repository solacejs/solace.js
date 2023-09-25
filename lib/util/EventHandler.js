"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const Message_1 = require("../structures/Message");
const User_1 = require("../structures/User");
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
        client.user = new User_1.User(data.user);
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
        data.client = client;
        if (data.guild_id)
            client.fetchGuild(data.guild_id).then((guild) => {
                data.guild = guild;
                client.fetchChannel(data.channel_id).then((channel) => {
                    data.channel = channel;
                    data.channel.client = client;
                    client.emit("messageCreate", new Message_1.Message(data));
                });
            });
    }
}
exports.EventHandler = EventHandler;
