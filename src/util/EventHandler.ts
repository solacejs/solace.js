import { Client } from "../client/Client";
import { Message } from "../structures/Message";
import { User } from "../structures/User";

/**
 * A utility class for handling Discord events received by the client.
 */
export class EventHandler {

    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "READY" event.
     */
    public static READY(client: Client, data: any) {
        // Initialize the client's user with the provided data.
        client.user = new User(data.user);

        // Emit a "ready" event with the client as the argument.
        client.emit("ready", client);
    }

    /**
     * Handles the "MESSAGE_CREATE" event by.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "MESSAGE_CREATE" event.
     */
    public static MESSAGE_CREATE(client: Client, data: any) {
        // Emit a "messageCreate" event with the received data.
        data.client = client;
        if (data.guild_id) client.fetchGuild(data.guild_id).then((guild: any) => {
            data.guild = guild;
            client.fetchChannel(data.channel_id).then((channel) => {
                data.channel = channel;
                data.channel.client = client;
                client.emit("messageCreate", new Message(data));
            })
        })
    }
}
