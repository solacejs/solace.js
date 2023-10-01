import { Client } from "../client/Client";
import { ClientEvents } from "../interfaces/ClientEvents";
/**
 * Represents an event that can be handled by the client.
 */
export declare abstract class Event {
    name: keyof ClientEvents;
    once: boolean;
    /**
     * Creates a new Event instance.
     * @param {keyof ClientEvents} name - The name of the event.
     * @param {boolean} once - Indicates whether the event should only be handled once.
     */
    constructor(name: keyof ClientEvents, once: boolean);
    /**
     * Executes the event's logic.
     * This method should be overridden by subclasses to provide specific event handling logic.
     * @param {Client} client - The client instance.
     * @param {...any} args - Additional arguments passed when the event is triggered.
     */
    abstract execute(client: Client, ...args: any[]): Promise<void>;
}
