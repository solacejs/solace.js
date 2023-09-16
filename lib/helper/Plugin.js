"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
     * Called when the plugin is enabled.
     * @param client - The client instance that manages the bot.
     */
    onEnable(client) { }
    /**
     * Called when the plugin is disabled.
     * @param client - The client instance that manages the bot.
     */
    onDisable(client) { }
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
exports.default = Plugin;
