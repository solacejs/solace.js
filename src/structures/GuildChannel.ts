import { Channel } from "./Channel";
import { Guild } from "./Guild";

export class GuildChannel extends Channel {
    
    public guild: Guild;
    public guildId: string;

    constructor(guild: Guild, data: any) {
        super(data);
        this.guild = guild;
        this.guildId = guild?.id ?? data.guild_id;
    }
}