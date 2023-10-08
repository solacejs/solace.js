import { ApiAutoModerationRule } from "./ApiAutoModeration";
import { ApiChannel, ApiChannelOverwrite } from "./ApiChannel";
import { ApiEmoji } from "./ApiEmoji";
import { ApiGuild, ApiGuildScheduledEvent } from "./ApiGuild";
import { ApiGuildMember } from "./ApiGuildMember";
import { ApiIntegration } from "./ApiIntegration";
import { ApiApplicationCommandPermissionsStructure } from "./ApiInteraction";
import { ApiInvite, ApiInviteMetadata } from "./ApiInvite";
import { ApiRole } from "./ApiRole";
import { ApiStage } from "./ApiStage";
import { ApiSticker } from "./ApiSticker";
import { ApiThreadMetadata } from "./ApiThreadChannel";
import { ApiWebhook } from "./ApiWebhook";

export interface ApiAuditLogEntry {
    action_type: AuditLogEvent;
    changes?: ApiAuditLogChange[];
    id: string;
    target_id: string | null;
    user_id: string | null;
}

export type ApiAuditLogValue = ApiGuild | ApiChannel | ApiChannelOverwrite | ApiGuildMember | ApiRole | ApiInvite | ApiInvite | ApiInviteMetadata | ApiWebhook | ApiEmoji | ApiIntegration | ApiStage | ApiSticker | ApiGuildScheduledEvent | ApiThreadMetadata | ApiApplicationCommandPermissionsStructure | ApiAutoModerationRule;

export interface ApiAuditLogChange {
    key: string;
    new_value?: ApiAuditLogValue;
    old_value: ApiAuditLogValue;
}

export enum AuditLogEvent {
    GUILD_UPDATE = 1,
    CHANNEL_CREATE = 10,
    CHANNEL_UPDATE = 11,
    CHANNEL_DELETE = 12,
    CHANNEL_OVERWRITE_CREATE = 13,
    CHANNEL_OVERWRITE_UPDATE = 14,
    CHANNEL_OVERWRITE_DELETE = 15,
    MEMBER_KICK = 20,
    MEMBER_PRUNE = 21,
    MEMBER_BAN_ADD = 22,
    MEMBER_BAN_REMOVE = 23,
    MEMBER_UPDATE = 24,
    MEMBER_ROLE_UPDATE = 25,
    MEMBER_MOVE = 26,
    MEMBER_DISCONNECT = 27,
    BOT_ADD = 28,
    ROLE_CREATE = 30,
    ROLE_UPDATE = 31,
    ROLE_DELETE = 32,
    INVITE_CREATE = 40,
    INVITE_UPDATE = 41,
    INVITE_DELETE = 42,
    WEBHOOK_CREATE = 50,
    WEBHOOK_UPDATE = 51,
    WEBHOOK_DELETE = 52,
    EMOJI_CREATE = 60,
    EMOJI_UPDATE = 61,
    EMOJI_DELETE = 62,
    MESSAGE_DELETE = 72,
    MESSAGE_BULK_DELETE = 73,
    MESSAGE_PIN = 74,
    MESSAGE_UNPIN = 75,
    INTEGRATION_CREATE = 80,
    INTEGRATION_UPDATE = 81,
    INTEGRATION_DELETE = 82,
    STAGE_INSTANCE_CREATE = 83,
    STAGE_INSTANCE_UPDATE = 84,
    STAGE_INSTANCE_DELETE = 85,
    STICKER_CREATE = 90,
    STICKER_UPDATE = 91,
    STICKER_DELETE = 92,
    GUILD_SCHEDULED_EVENT_CREATE = 100,
    GUILD_SCHEDULED_EVENT_UPDATE = 101,
    GUILD_SCHEDULED_EVENT_DELETE = 102,
    THREAD_CREATE = 110,
    THREAD_UPDATE = 111,
    THREAD_DELETE = 112,
    APPLICATION_COMMAND_PERMISSION_UPDATE = 121,
    AUTO_MODERATION_RULE_CREATE = 140,
    AUTO_MODERATION_RULE_UPDATE = 141,
    AUTO_MODERATION_RULE_DELETE = 142,
    AUTO_MODERATION_BLOCK_MESSAGE = 143,
    AUTO_MODERATION_FLAG_TO_CHANNEL = 144,
    AUTO_MODERATION_USER_COMMUNICATION_DISABLED = 145,
    CREATOR_MONETIZATION_REQUEST_CREATED = 150,
    CREATOR_MONETIZATION_TERMS_ACCEPTED = 151
}