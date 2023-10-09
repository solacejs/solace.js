import { Constants } from "../config/Constants";
import { Guild } from "../structures/Guild";
import { SolaceError } from "../util/SolaceError";
import { CacheBase } from "./CacheBase";

export class GuildCache extends CacheBase {

    public async fetch(id: string): Promise<Guild> {
        if (this.cache.has(id)) return this.cache.get(id);

        const res = await fetch(`${Constants.API}/guilds/${id}`, {
            headers: {
                Authorization: `Bot ${this.client.options.token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (data.errors) {
            if (data.errors.guild_id) {
                throw new SolaceError(data.message, data.errors.guild_id._errors[0].message)
            }
        }

        const guild = new Guild(data);
        this.cache.set(guild.id, guild);
        return guild;
    }
}