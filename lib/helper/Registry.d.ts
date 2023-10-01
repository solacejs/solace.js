import { Client } from "../client/Client";
import { Event } from "./Event";
/**
 * A utility class that can be used to register commands, events, and more.
 */
export declare class Registry {
    private static eventCache;
    static events: Event[];
    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} args - The list of events to register.
     */
    static registerEvents(client: Client, ...args: Event[]): typeof Registry;
    static allowEventCache(): typeof Registry;
    static registerEventsFromDirectory(client: Client, dir: string): typeof Registry;
}
