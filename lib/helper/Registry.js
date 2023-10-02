"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
        for (const event of args) {
            event.once
                ? client.once(event.name, (...args) => event.execute(client, ...args))
                : client.on(event.name, (...args) => event.execute(client, ...args));
        }
        return Registry;
    }
    static allowEventCache() {
        Registry.eventCache = true;
        return Registry;
    }
    static registerEventsFromDirectory(client, dir) {
        const files = fs_1.default.readdirSync(dir);
        for (const file of files) {
            const filePath = path_1.default.join(dir, file);
            const stat = fs_1.default.statSync(filePath);
            if (stat.isDirectory()) {
                this.registerEventsFromDirectory(client, filePath);
            }
            else if (stat.isFile() && (file.endsWith(".ts") || file.endsWith(".ts"))) {
                const event = new (require(filePath).default);
                this.registerEvents(client, event);
                if (this.eventCache == true)
                    Registry.events.push(event);
            }
        }
        return Registry;
    }
}
exports.Registry = Registry;
Registry.eventCache = false;
Registry.events = [];
