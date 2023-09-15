"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A utility class that can be used to register commands, events, and more.
 */
class Registry {
    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} args - The list of events to register.
     */
    static registerEvents(client, ...args) {
        args.forEach((event) => {
            // Register the event as a one-time event or regular event based on the 'once' flag.
            event.once
                ? client.once(event.name, (...args) => event.execute(client, ...args))
                : client.on(event.name, (...args) => event.execute(client, ...args));
        });
    }
}
exports.default = Registry;
