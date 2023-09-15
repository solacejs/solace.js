import Client from "../client/Client";
/**
 * Interface defining the structure of client events and their associated argument types.
 */
export default interface ClientEvents {
    /**
     * Represents the "ready" event, which is emitted when the client is ready.
     * @event ready
     * @param {Client} client - The Discord client instance that emitted the event.
     */
    ready: [client: Client];
}
