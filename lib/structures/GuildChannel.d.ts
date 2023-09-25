import { Channel } from "./Channel";
import { Guild } from "./Guild";
export declare class GuildChannel extends Channel {
    guild: Guild;
    guildId: string;
    constructor(guild: Guild, data: any);
}
