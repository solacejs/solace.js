import { Client } from "../client/Client";
import { Event } from "./Event";
import { Plugin } from "./Plugin";
import { Command } from "./Command";
/**
 * A utility class that can be used to register commands, events, and more.
 */
export declare class Registry {
    /**
     * Indicates whether event caching is enabled.
     */
    private static eventCache;
    /**
     * An array to store registered events.
     */
    static events: Event[];
    static commands: Command[];
    /**
     * An array to store registered plugins.
     */
    static plugins: Plugin[];
    /**
     * Enables event caching, allowing events to be stored in the 'events' array.
     * @returns The Registry instance for method chaining.
     */
    static allowEventCache(): typeof Registry;
    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} events - The list of events to register.
     * @returns The Registry instance for method chaining.
     */
    static registerEvents(client: Client, ...events: Event[]): typeof Registry;
    static registerCommands(client: Client, options: {
        guildId?: string;
        clientId: string;
    }, ...commands: Command[]): typeof Registry;
    /**
     * Registers events from files in a specified directory.
     * @param {Client} client - The Discord client instance.
     * @param {string} dir - The directory path to scan for event files.
     * @returns The Registry instance for method chaining.
     */
    static registerEventsFromDirectory(client: Client, dir: string): typeof Registry;
    static registerPlugins(client: Client, ...plugins: Plugin[]): typeof Registry;
}
