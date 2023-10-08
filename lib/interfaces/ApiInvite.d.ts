import { ApiApplication } from "./ApiApplication";
import { ApiChannel } from "./ApiChannel";
import { ApiGuild, ApiGuildScheduledEvent } from "./ApiGuild";
import { ApiGuildMember } from "./ApiGuildMember";
import { ApiUser } from "./ApiUser";
export interface ApiInvite {
    approximate_member_count?: number;
    approximate_presence_count?: number;
    code: string;
    channel: ApiChannel;
    expires_at?: string | null;
    guild?: ApiGuild;
    guild_scheduled_event?: ApiGuildScheduledEvent;
    inviter?: ApiUser;
    stage_instance?: ApiInviteStage;
    target_application?: ApiApplication;
    target_type: number;
    target_user?: ApiUser;
}
export interface ApiInviteMetadata {
    created_at: string;
    max_age: number;
    max_uses: number;
    temporary: boolean;
    uses: number;
}
export interface ApiInviteStage {
    members: ApiGuildMember[];
    participant_count: number;
    speaker_count: number;
    topic: string;
}
