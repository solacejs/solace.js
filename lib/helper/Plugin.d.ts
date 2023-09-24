import { Client } from "../client/Client";
/**
 * Represents a plugin that can be registered and ran alongside your bot.
 */
export declare class Plugin {
    private name;
    /**
     * Set the name of the plugin.
     * @param name - The name of the plugin.
     */
    constructor(name: string);
    /**
     * Called when the plugin is enabled.
     * @param client - The client instance that manages the bot.
     */
    onEnable(client: Client): void;
    /**
     * Called when the plugin is disabled.
     * @param client - The client instance that manages the bot.
     */
    onDisable(client: Client): void;
    /**
     * Resolves dependencies required by the plugin.
     * @param dependencies - An array of plugin names that this plugin depends on.
     * @returns An array of unresolved dependencies (plugins that need to be loaded first).
     */
    resolveDependencies(dependencies: string[]): string[];
    /**
     * Gets the name of the plugin
     * @returns The name of the plugin
     */
    getName(): string;
}
