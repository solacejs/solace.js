import { Constants } from "../config/Constants";
import { ApiGuildTextChannel } from "../interfaces/ApiGuildTextChannel";
import { ChannelType } from "../structures/Channel";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { CacheBase } from "./CacheBase";

export class ChannelCache extends CacheBase {

    public async fetch(id: string) {

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
                this.cache.set(channel.id, channel);
                return channel;
        }
    }
}