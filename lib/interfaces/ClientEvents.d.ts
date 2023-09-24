import { Client } from "../client/Client";
/**
 * Interface defining the structure of client events and their associated argument types.
 */
export interface ClientEvents {
    /**
     * Represents the "ready" event, which is emitted when the client is ready.
     * @event ready
     * @param {Client} client - The Discord client instance that emitted the event.
     */
    ready: [client: Client];
    /**
     * Represents the "messageCreate" event, which is emitted when a new message is created.
     * @event messageCreate
     * @param {Client} client - The Discord client instance that emitted the event.
     * @param {any} message - The message object associated with the event.
     */
    messageCreate: [client: Client, message: any];
}
