import { Client } from "../client/Client";
import { Constants } from "../config/Constants";
import { MessageOptions } from "../interfaces/MessageOptions";
import { Guild } from "./Guild";
import { GuildChannel } from "./GuildChannel";

export class GuildTextChannel extends GuildChannel {

    public nsfw: boolean;
    public client: Client;

    constructor(guild: Guild, data: any) {
        super(guild, data);
        this.nsfw = !!data.nsfw;
        this.client = data.client;
    }

    public async send(options: string | MessageOptions) {
        try {
            let body = {};
            if (typeof options == "object") {
                body = {
                    embeds: options.embeds?.map((embed) => embed.toRaw()),
                    content: options.content
                }
            } else body = { content: options };

            await fetch(`${Constants.API}/channels/${this.id}/messages`, {
                method: "POST",
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...body
                })
            });
        } catch (err) {
            throw new Error(`Failed to create message: ${err}`);
        }
    }
}