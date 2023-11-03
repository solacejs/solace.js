import { Channel } from "./Channel";
import { Guild } from "./Guild";

/**
 * Represents a channel within a guild (server).
 */
export class GuildChannel extends Channel {

    /**
     * The Guild instance that this channel belongs to.
     */
    public guild: Guild;

    /**
     * The ID of the guild that this channel belongs to.
     */
    public guildId: string;

    /**
     * Constructs a new GuildChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild channel.
     */
    constructor(guild: Guild, data: any) {
        super(data);
        this.guild = guild;
        this.guildId = guild?.id ?? data.guild_id;
    }
}