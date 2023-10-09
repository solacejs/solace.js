import { Constants } from "../config/Constants";
import { ApiGuildTextChannel } from "../interfaces/ApiGuildTextChannel";
import { ChannelType } from "../structures/Channel";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { CacheBase } from "./CacheBase";

/**
 * Cache manager for channels
 */
export class ChannelCache extends CacheBase {

    /**
     * Fetches a channel from discord or grabs a channel from cache if it exists.
     * @param id - Channel ID
     * @returns A channel or null
     */
    public async fetch(id: string): Promise<GuildTextChannel | null> {

        if (this.cache.has(id)) return this.cache.get(id);

        const res = await fetch(`${Constants.API}/channels/${id}`, {
            headers: {
                Authorization: `Bot ${this.client.options.token}`,
                "Content-Type": "application/json"
            }
        });

        const data: ApiGuildTextChannel = await res.json();

        switch (data.type) {
            case ChannelType.GUILD_TEXT:
                const channel = new GuildTextChannel(await this.client.guilds.fetch(data.guild_id), data);
                channel.client = this.client;
                this.cache.set(channel.id, channel);
                return channel;
            default:
                return null;
        }
    }
}