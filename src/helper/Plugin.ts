import { Client } from "../client/Client";

/**
 * Represents a plugin that can be registered and ran alongside your bot.
 */
export class Plugin {

    /**
     * Set the name of the plugin.
     * @param name - The name of the plugin.
     */
    constructor(private name: string) { }

    /**
     * Called when the plugin is enabled.
     * @param client - The client instance that manages the bot.
     */
    public onEnable(client: Client) {}

    /**
     * Called when the plugin is disabled.
     * @param client - The client instance that manages the bot.
     */
    public onDisable(client: Client) { }

    /**
     * Resolves dependencies required by the plugin.
     * @param dependencies - An array of plugin names that this plugin depends on.
     * @returns An array of unresolved dependencies (plugins that need to be loaded first).
     */
    public resolveDependencies(dependencies: string[]) {
        return [] as string[];
    }

    /**
     * Gets the name of the plugin
     * @returns The name of the plugin
     */
    public getName() {
        return this.name;
    }
}