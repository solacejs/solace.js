import { Client } from "../client/Client";
import { Constants } from "../config/Constants";
import { Guild } from "../structures/Guild";
import { Collection } from "../util/Collection";
import { SolaceError } from "../util/SolaceError";

export class GuildCache {

    public readonly cache: Collection<string, Guild>;

    constructor(public client: Client) {
        let maxSize = 256;
        if (client.options.cache) maxSize = client.options.cache.guilds ? client.options.cache.guilds : maxSize;
        this.cache = new Collection<string, Guild>(maxSize);
    }

    public async fetch(id: string): Promise<Guild | null> {
        if (this.cache.has(id)) return this.cache.get(id) ?? null;

        const res = await fetch(`${Constants.API}/guilds/${id}`, {
            headers: {
                Authorization: `Bot ${this.client.options.token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (data.errors) {
            if (data.errors.guild_id) throw new SolaceError(data.message, data.errors.guild_id._errors[0].message);
            return null;
        }

        const guild = new Guild(data);
        this.cache.set(guild.id, guild);
        return guild;
    }
}