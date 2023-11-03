import { Constants } from "../config/Constants";
import { MessageOptions } from "../interfaces/MessageOptions";
import { Guild } from "./Guild";
import { GuildChannel } from "./GuildChannel";

/**
 * Represents a text channel within a guild (server).
 */
export class GuildTextChannel extends GuildChannel {

    /**
     * Indicates whether the channel is NSFW (Not Safe For Work).
     */
    public nsfw: boolean;

    /**
     * Constructs a new GuildTextChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild text channel.
     */
    constructor(guild: Guild, data: any) {
        super(guild, data);
        this.nsfw = !!data.nsfw;
        this.client = data.client;
    }

    /**
     * Sends a message to the guild text channel.
     * @param {string | MessageOptions} options - The message content or options.
     * @throws {Error} Throws an error if message creation fails.
     */
    public async send(options: string | MessageOptions) {
        try {
            let body = {};
            if (typeof options == "object") {
                body = {
                    embeds: options.embeds ? options.embeds.map((embed) => embed.toRaw()) : [],
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