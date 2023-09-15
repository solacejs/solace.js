import Client from "../client/Client";
import ClientEvents from "../interfaces/ClientEvents";

/**
 * Represents an event that can be handled by the client.
 */
export default class Event {

    /**
     * Creates a new Event instance.
     * @param {keyof ClientEvents} name - The name of the event.
     * @param {boolean} once - Indicates whether the event should only be handled once.
     */
    constructor(public name: keyof ClientEvents, public once: boolean) { }

    /**
     * Executes the event's logic.
     * This method should be overridden by subclasses to provide specific event handling logic.
     * @param {Client} client - The client instance.
     * @param {...any} args - Additional arguments passed when the event is triggered.
     * @throws {Error} - If the event subclass does not implement the execute method.
     */
    public async execute(client: Client, ...args: any[]) {
        throw new Error(`Event ${this.name} is missing an execute method.`);
    }
}
