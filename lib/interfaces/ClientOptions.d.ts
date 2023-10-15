import { GatewayIntents } from "../config/GatewayIntents";
/**
 * Interface defining the structure of client options required for initializing a Discord client.
 */
export interface ClientOptions {
    cache?: ClientOptionsCache;
    /**
     * The Discord bot token used for authentication and authorization.
     * @property {string} token
     */
    token: string;
    /**
     * The gateway intents specifying the events the bot is interested in.
     * @property {GatewayIntents | GatewayIntents[] | number} intents
     * @see {@link GatewayIntents} for predefined intent values.
     */
    intents: GatewayIntents | GatewayIntents[] | number;
}
export interface ClientOptionsCache {
    channels?: number;
    guilds?: number;
}
