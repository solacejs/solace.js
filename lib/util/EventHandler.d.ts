import Client from "../client/Client";
/**
 * A utility class for handling Discord events received by the client.
 */
export default class EventHandler {
    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "READY" event.
     */
    static READY(client: Client, data: any): void;
    /**
     * Handles the "MESSAGE_CREATE" event by.
     * @param {Client} client - The client instance.
     * @param {any} data - The data associated with the "MESSAGE_CREATE" event.
     */
    static MESSAGE_CREATE(client: Client, data: any): void;
}
