import { Client } from "../client/Client";
import { Message } from "../structures/Message";

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
     * Called when the bot is online.
     * @param client - The client instance that manages the bot.
     */
    public async onReady(client: Client) {}

    /**
     * Called whenever a message is sent
     * @param client - The client instance that manages the bot.
     * @param message - The message that was sent.
     */
    public async onMessageCreate(client: Client, message: Message) {}

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