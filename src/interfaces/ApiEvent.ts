import { ApiApplication } from "./ApiApplication";
import { ApiAuditLogEntry } from "./ApiAuditLogEntry";
import { ApiChannel } from "./ApiChannel";
import { ApiEmoji } from "./ApiEmoji";
import { ApiGuild, ApiGuildScheduledEvent } from "./ApiGuild";
import { ApiGuildMember } from "./ApiGuildMember";
import { ApiMessage } from "./ApiMessage";
import { ApiPresence } from "./ApiPresence";
import { ApiRole } from "./ApiRole";
import { ApiSticker } from "./ApiSticker";
import { ApiUser } from "./ApiUser";

export interface ApiEvents {
    ChannelCreate: ChannelCreate;
    ChannelDelete: ChannelDelete;
    ChannelPinsUpdate: ChannelPinsUpdate;
    ChannelUpdate: ChannelUpdate;

    GuildAuditLogEntryCreate: GuildAuditLogEntryCreate;
    GuildBanAdd: GuildBanAdd;
    GuildBanRemove: GuildBanRemove;
    GuildCreate: GuildCreate;
    GuildDelete: GuildDelete;
    GuildEmojisUpdate: GuildEmojisUpdate;
    GuildIntegrationsUpdate: GuildIntegrationsUpdate;
    GuildMemberAdd: GuildMemberAdd;
    GuildMemberRemove: GuildMemberRemove;
    GuildMemberUpdate: GuildMemberUpdate;
    GuildMembersChunk: GuildMembersChunk;
    GuildRoleCreate: GuildRoleCreate;
    GuildRoleDelete: GuildRoleDelete;
    GuildRoleUpdate: GuildRoleUpdate;
    GuildScheduledEventCreate: GuildScheduledEventCreate;
    GuildScheduledEventDelete: GuildScheduledEventDelete;
    GuildScheduledEventUpdate: GuildScheduledEventUpdate;
    GuildStickersUpdate: GuildStickersUpdate;
    GuildUpdate: GuildUpdate;

    MessageCreate: MessageCreate;

    Ready: Ready;
}

export interface ChannelCreate extends ApiChannel { };
export interface ChannelDelete extends ApiChannel { };

export interface ChannelPinsUpdate {
    channel_id: string;
    guild_id?: string;
    last_pin_timestamp?: string | null;
}

export interface ChannelUpdate extends ApiChannel { };

export interface GuildAuditLogEntryCreate extends ApiAuditLogEntry { };

export interface GuildBanAdd {
    guild_id: string;
    user: ApiUser;
}

export interface GuildBanRemove {
    guild_id: string;
    user: ApiUser;
}

export interface GuildCreate extends ApiGuild { };
export interface GuildDelete extends ApiGuild { };

export interface GuildEmojisUpdate {
    guild_id: string;
    emojis: ApiEmoji[];
}

export interface GuildIntegrationsUpdate {
    guild_id: string;
}

export interface GuildMemberAdd extends ApiGuildMember { };
export interface GuildMemberRemove extends ApiGuildMember { };

export interface GuildMemberUpdate {
    avatar: string | null;
    communication_disabled_until?: string | null;
    deaf?: boolean;
    guild_id: string;
    joined_at: string | null;
    mute?: boolean;
    nick?: string | null;
    pending?: boolean;
    premium_since: string | null;
    roles: string[];
    user: ApiUser;
}

export interface GuildMembersChunk {
    chunk_count: number;
    chunk_index: number;
    guild_id: string;
    members: ApiGuildMember[];
    nonce?: string
    not_found?: [];
    presences: ApiPresence[];
}

export interface GuildRoleCreate {
    guild_id: string;
    role: ApiRole;
}

export interface GuildRoleDelete {
    guild_id: string;
    role_id: string;
}

export interface GuildRoleUpdate {
    guild_id: string;
    role: ApiRole;
}

export interface GuildScheduledEventCreate extends ApiGuildScheduledEvent { };
export interface GuildScheduledEventDelete extends ApiGuildScheduledEvent { };
export interface GuildScheduledEventUpdate extends ApiGuildScheduledEvent { };

export interface GuildStickersUpdate {
    guild_id: string;
    stickers: ApiSticker[];
}

export interface GuildUpdate extends ApiGuild { };

export interface MessageCreate extends ApiMessage { };

export interface Ready {
    application: ApiApplication;
    guilds: ApiGuild[];
    resume_gateway_url: string;
    session_id: string;
    shard?: [number, number];
    user: ApiUser;
    v: number;
}