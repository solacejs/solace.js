import { Client } from "../client/Client";
import { Constants } from "../config/Constants";
import { ApiDmChannel } from "../interfaces/ApiDmChannel";
import { ApiGuildTextChannel } from "../interfaces/ApiGuildTextChannel";
import { ChannelType } from "../structures/Channel";
import { DmChannel } from "../structures/DmChannel";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { Collection } from "../util/Collection";

/**
 * Cache manager for channels
 */
export class ChannelCache {

    public readonly cache: Collection<string, GuildTextChannel | DmChannel>;

    constructor(public client: Client) {
        let maxSize = 256;
        if (client.options.cache) maxSize = client.options.cache.channels ? client.options.cache.channels : maxSize;
        this.cache = new Collection<string, GuildTextChannel>(maxSize);
    }

    /**
     * Fetches a channel from discord or grabs a channel from cache if it exists.
     * @param id - Channel ID
     * @returns A channel or null
     */
    public async fetch(id: string): Promise<GuildTextChannel | DmChannel | null> {

        if (this.cache.has(id)) return this.cache.get(id) ?? null;

        const res = await fetch(`${Constants.API}/channels/${id}`, {
            headers: {
                Authorization: `Bot ${this.client.options.token}`,
                "Content-Type": "application/json"
            }
        });

        const data: ApiGuildTextChannel | ApiDmChannel = await res.json();

        switch (data.type) {
            case ChannelType.DM:
                const channel = new DmChannel(data as ApiDmChannel);
                channel.client = this.client;
                this.cache.set(channel.id, channel);
                return channel;
            case ChannelType.GUILD_TEXT:
                const guild = await this.client.guilds.fetch((data as ApiGuildTextChannel).guild_id);
                if (guild) {
                    const channel = new GuildTextChannel(guild, data);
                    channel.client = this.client;
                    this.cache.set(channel.id, channel);
                    return channel;
                } else return null;
            default:
                return null;
        }
    }
}