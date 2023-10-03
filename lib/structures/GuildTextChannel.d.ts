import { Client } from "../client/Client";
import { MessageOptions } from "../interfaces/MessageOptions";
import { Guild } from "./Guild";
import { GuildChannel } from "./GuildChannel";
/**
 * Represents a text channel within a guild (server).
 */
export declare class GuildTextChannel extends GuildChannel {
    /**
     * Indicates whether the channel is NSFW (Not Safe For Work).
     */
    nsfw: boolean;
    /**
     * The client instance.
     */
    client: Client;
    /**
     * Constructs a new GuildTextChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild text channel.
     */
    constructor(guild: Guild, data: any);
    /**
     * Sends a message to the guild text channel.
     * @param {string | MessageOptions} options - The message content or options.
     * @throws {Error} Throws an error if message creation fails.
     */
    send(options: string | MessageOptions): Promise<void>;
}
