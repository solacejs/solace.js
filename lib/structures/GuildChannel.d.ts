import { Channel } from "./Channel";
import { Guild } from "./Guild";
/**
 * Represents a channel within a guild (server).
 */
export declare class GuildChannel extends Channel {
    /**
     * The Guild instance that this channel belongs to.
     */
    guild: Guild;
    /**
     * The ID of the guild that this channel belongs to.
     */
    guildId: string;
    /**
     * Constructs a new GuildChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild channel.
     */
    constructor(guild: Guild, data: any);
}
