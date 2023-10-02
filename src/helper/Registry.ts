import fs from "fs";
import { Client } from "../client/Client";
import { Event } from "./Event";
import path from "path";

/**
 * A utility class that can be used to register commands, events, and more.
 */
export class Registry {

    private static eventCache = false;
    public static events: Event[] = [];

    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} args - The list of events to register.
     */
    public static registerEvents(client: Client, ...args: Event[]) {
        for (const event of args) {
            event.once
                ? client.once(event.name, (...args: any[]) => event.execute(client, ...args))
                : client.on(event.name, (...args: any[]) => event.execute(client, ...args));
        }
        return Registry;
    }

    public static allowEventCache() {
        Registry.eventCache = true;
        return Registry;
    }

    public static registerEventsFromDirectory(client: Client, dir: string) {

        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                this.registerEventsFromDirectory(client, filePath);
            } else if (stat.isFile() && (file.endsWith(".ts") || file.endsWith(".ts"))) {
                const event = new (require(filePath).default);
                this.registerEvents(client, event);
                if (this.eventCache == true) Registry.events.push(event);
            }
        }

        return Registry;
    }
}
