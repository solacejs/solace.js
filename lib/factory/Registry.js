"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Constants_1 = require("../config/Constants");
/**
 * A utility class that can be used to register commands, events, and more.
 */
class Registry {
    /**
     * Enables event caching, allowing events to be stored in the 'events' array.
     * @returns The Registry instance for method chaining.
     */
    static allowEventCache() {
        Registry.eventCache = true;
        return Registry;
    }
    /**
     * Registers a list of events with a Discord client.
     * @param {Client} client - The Discord client instance.
     * @param {...Event[]} events - The list of events to register.
     * @returns The Registry instance for method chaining.
     */
    static registerEvents(client, ...events) {
        for (const event of events) {
            event.once
                ? client.once(event.name, (...args) => event.execute(client, ...args))
                : client.on(event.name, (...args) => event.execute(client, ...args));
        }
        return Registry;
    }
    static registerCommands(client, options, ...commands) {
        for (const command of commands) {
            this.commands.push(command);
            if (options.guildId) {
                fetch(`${Constants_1.Constants.API}/applications/${options.clientId}/guilds/commands`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bot ${client.options.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(command),
                });
            }
            else {
                fetch(`${Constants_1.Constants.API}/applications/${options.clientId}/commands`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bot ${client.options.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(command),
                });
            }
        }
        return Registry;
    }
    /**
     * Registers events from files in a specified directory.
     * @param {Client} client - The Discord client instance.
     * @param {string} dir - The directory path to scan for event files.
     * @returns The Registry instance for method chaining.
     */
    static registerEventsFromDirectory(client, dir) {
        const files = fs_1.default.readdirSync(dir);
        for (const file of files) {
            const filePath = path_1.default.join(dir, file);
            const stat = fs_1.default.statSync(filePath);
            if (stat.isDirectory()) {
                this.registerEventsFromDirectory(client, filePath);
            }
            else if (stat.isFile() &&
                (file.endsWith(".ts") || file.endsWith(".js"))) {
                const event = new (require(filePath).default)();
                this.registerEvents(client, event);
                if (this.eventCache == true)
                    Registry.events.push(event);
            }
        }
        return Registry;
    }
    static registerPlugins(client, ...plugins) {
        this.plugins = plugins;
        return Registry;
    }
}
exports.Registry = Registry;
/**
 * Indicates whether event caching is enabled.
 */
Registry.eventCache = false;
/**
 * An array to store registered events.
 */
Registry.events = [];
Registry.commands = [];
/**
 * An array to store registered plugins.
 */
Registry.plugins = [];
