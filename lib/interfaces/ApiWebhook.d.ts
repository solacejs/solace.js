import { ApiChannel } from "./ApiChannel";
import { ApiGuild } from "./ApiGuild";
import { ApiUser } from "./ApiUser";
export interface ApiWebhook {
    application_id: string | null;
    avatar: string | null;
    channel_id: string | null;
    guild_id?: string | null;
    name: string | null;
    source_channel?: ApiChannel;
    source_guild?: ApiGuild;
    token?: string;
    type: number;
    url?: string;
    user?: ApiUser;
    id: string;
}
