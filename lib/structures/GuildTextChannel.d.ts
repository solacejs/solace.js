import { Client } from "../client/Client";
import { MessageOptions } from "../interfaces/MessageOptions";
import { Guild } from "./Guild";
import { GuildChannel } from "./GuildChannel";
export declare class GuildTextChannel extends GuildChannel {
    nsfw: boolean;
    client: Client;
    constructor(guild: Guild, data: any);
    send(options: string | MessageOptions): Promise<void>;
}
