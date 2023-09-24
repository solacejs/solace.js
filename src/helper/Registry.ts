import { Client } from "../client/Client";
import { Event } from "./Event";

/**
 * A utility class that can be used to register commands, events, and more.
 */
export class Registry {

    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} args - The list of events to register.
     */
    public static registerEvents(client: Client, ...args: Event[]) {
        args.forEach((event) => {
            // Register the event as a one-time event or regular event based on the 'once' flag.
            event.once
                ? client.once(event.name, (...args: any[]) => event.execute(client, ...args))
                : client.on(event.name, (...args: any[]) => event.execute(client, ...args));
        });
    }
}
