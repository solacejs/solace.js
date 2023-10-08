"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
/**
 * Represents a plugin that can be registered and ran alongside your bot.
 */
class Plugin {
    /**
     * Set the name of the plugin.
     * @param name - The name of the plugin.
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Called when the bot is online.
     * @param client - The client instance that manages the bot.
     */
    onReady(client) { }
    /**
     * Called whenever a message is sent
     * @param client - The client instance that manages the bot.
     * @param message - The message that was sent.
     */
    onMessageCreate(client, message) { }
    /**
     * Resolves dependencies required by the plugin.
     * @param dependencies - An array of plugin names that this plugin depends on.
     * @returns An array of unresolved dependencies (plugins that need to be loaded first).
     */
    resolveDependencies(dependencies) {
        return [];
    }
    /**
     * Gets the name of the plugin
     * @returns The name of the plugin
     */
    getName() {
        return this.name;
    }
}
exports.Plugin = Plugin;
