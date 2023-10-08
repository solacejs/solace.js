import { Client } from "../client/Client";
import { ApiEvents } from "../interfaces/ApiEvent";
/**
 * A utility class for handling Discord events received by the client.
 */
export declare class EventHandler {
    /**
     * Handles the "CHANNEL_CREATE" event.
     * @param client - The client instance.
     * @param data - The data associated with the "CHANNEL_CREATE" event.
     */
    static CHANNEL_CREATE(client: Client, data: ApiEvents["ChannelCreate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - Tje data associated with the "CHANNEL_DELETE" event.
     */
    static CHANNEL_DELETE(client: Client, data: ApiEvents["ChannelDelete"]): void;
    static CHANNEL_PINS_UPDATE(client: Client, data: ApiEvents["ChannelPinsUpdate"]): void;
    /**
     * Handles the "CHANNEL_CREATE" event.
     * @param client - The client instance.
     * @param data - The data associated with the "CHANNEL_UPDATE" event.
     */
    static CHANNEL_UPDATE(client: Client, data: ApiEvents["ChannelUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_AUDIT_LOG_ENTRY_CREATE" event.
     */
    static GUILD_AUDIT_LOG_ENTRY_CREATE(client: Client, data: ApiEvents["GuildAuditLogEntryCreate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_ADD" event.
     */
    static GUILD_BAN_ADD(client: Client, data: ApiEvents["GuildBanAdd"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_REMOVE" event.
     */
    static GUILD_BAN_REMOVE(client: Client, data: ApiEvents["GuildBanRemove"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_CREATE" event.
     */
    static GUILD_CREATE(client: Client, data: ApiEvents["GuildCreate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_DELETE" event.
     */
    static GUILD_DELETE(client: Client, data: ApiEvents["GuildDelete"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_EMOJIS_UPDATE" event.
     */
    static GUILD_EMOJIS_UPDATE(client: Client, data: ApiEvents["GuildEmojisUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_INTEGRATIONS_UPDATE" event.
     */
    static GUILD_INTEGRATIONS_UPDATE(client: Client, data: ApiEvents["GuildIntegrationsUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_ADD" event.
     */
    static GUILD_MEMBER_ADD(client: Client, data: ApiEvents["GuildMemberAdd"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_REMOVE" event.
     */
    static GUILD_MEMBER_REMOVE(client: Client, data: ApiEvents["GuildMemberRemove"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_UPDATE" event.
     */
    static GUILD_MEMBER_UPDATE(client: Client, data: ApiEvents["GuildMemberUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBERS_CHUNK" event.
     */
    static GUILD_MEMBERS_CHUNK(client: Client, data: ApiEvents["GuildMembersChunk"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_CREATE" event.
     */
    static GUILD_ROLE_CREATE(client: Client, data: ApiEvents["GuildRoleCreate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_DELETE" event.
     */
    static GUILD_ROLE_DELETE(client: Client, data: ApiEvents["GuildRoleDelete"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_UPDATE" event.
     */
    static GUILD_ROLE_UPDATE(client: Client, data: ApiEvents["GuildRoleUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_CREATE" event.
     */
    static GUILD_SCHEDULED_EVENT_CREATE(client: Client, data: ApiEvents["GuildScheduledEventCreate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_DELETE" event.
     */
    static GUILD_SCHEDULED_EVENT_DELETE(client: Client, data: ApiEvents["GuildScheduledEventDelete"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_UPDATE" event.
     */
    static GUILD_SCHEDULED_EVENT_UPDATE(client: Client, data: ApiEvents["GuildScheduledEventUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_STICKERS_UPDATE" event.
     */
    static GUILD_STICKERS_UPDATE(client: Client, data: ApiEvents["GuildStickersUpdate"]): void;
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_UPDATE" event.
     */
    static GUILD_UPDATE(client: Client, data: ApiEvents["GuildUpdate"]): void;
    /**
     * Handles the "MESSAGE_CREATE" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "MESSAGE_CREATE" event.
     */
    static MESSAGE_CREATE(client: Client, data: ApiEvents["MessageCreate"]): void;
    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "READY" event.
     */
    static READY(client: Client, data: ApiEvents["Ready"]): void;
}
