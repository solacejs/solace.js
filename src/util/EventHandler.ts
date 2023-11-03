import { Client } from "../client/Client";
import { Registry } from "../factory/Registry";
import { ApiChannel } from "../interfaces/ApiChannel";
import { ApiEvents } from "../interfaces/ApiEvent";
import { ApiMessage } from "../interfaces/ApiMessage";
import { AuditLogEntry } from "../structures/AuditLogEntry";
import { Channel, ChannelType } from "../structures/Channel";
import { Emoji } from "../structures/Emoji";
import { Guild } from "../structures/Guild";
import { GuildMember } from "../structures/GuildMember";
import { GuildScheduledEvent } from "../structures/GuildScheduledEvent";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { Interaction, InteractionType } from "../structures/Interaction";
import { Message } from "../structures/Message";
import { Presence } from "../structures/Presence";
import { Role } from "../structures/Role";
import { Sticker } from "../structures/Sticker";
import { User } from "../structures/User";

/**
 * A utility class for handling Discord events received by the client.
 */
export class EventHandler {

    private static async createMessage(client: Client, data: ApiMessage) {
        data.client = client;
        if (data.guild_id) await client.fetchGuild(data.guild_id).then(async (guild) => {
            data.guild = guild;
            await client.fetchChannel(data.channel_id).then((channel) => {
                data.channel = channel;
                data.channel.client = client;
            })
        });

        return new Message(data);
    }

    /**
     * Handles the "CHANNEL_CREATE" event.
     * @param client - The client instance.
     * @param data - The data associated with the "CHANNEL_CREATE" event.
     */
    public static CHANNEL_CREATE(client: Client, data: ApiEvents["ChannelCreate"]) {
        client.emit("channelCreate", new Channel(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - Tje data associated with the "CHANNEL_DELETE" event.
     */
    public static CHANNEL_DELETE(client: Client, data: ApiEvents["ChannelDelete"]) {
        client.emit("channelDelete", new Channel(data));
    }

    public static CHANNEL_PINS_UPDATE(client: Client, data: ApiEvents["ChannelPinsUpdate"]) {
        client.emit("channelPinsUpdate", {
            channelId: data.channel_id,
            guildId: data.guild_id,
            lastPinTimestamp: data.last_pin_timestamp
        });
    }

    /**
     * Handles the "CHANNEL_CREATE" event.
     * @param client - The client instance.
     * @param data - The data associated with the "CHANNEL_UPDATE" event.
     */
    public static CHANNEL_UPDATE(client: Client, data: ApiEvents["ChannelUpdate"]) {
        client.emit("channelUpdate", new Channel(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_AUDIT_LOG_ENTRY_CREATE" event.
     */
    public static GUILD_AUDIT_LOG_ENTRY_CREATE(client: Client, data: ApiEvents["GuildAuditLogEntryCreate"]) {
        client.emit("guildAuditLogEntryCreate", new AuditLogEntry(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_ADD" event.
     */
    public static GUILD_BAN_ADD(client: Client, data: ApiEvents["GuildBanAdd"]) {
        client.emit("guildBanAdd", {
            guildId: data.guild_id,
            user: new User(data.user)
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_REMOVE" event.
     */
    public static GUILD_BAN_REMOVE(client: Client, data: ApiEvents["GuildBanRemove"]) {
        client.emit("guildBanRemove", {
            guildId: data.guild_id,
            user: new User(data.user)
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_CREATE" event.
     */
    public static GUILD_CREATE(client: Client, data: ApiEvents["GuildCreate"]) {
        client.emit("guildCreate", new Guild(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_DELETE" event.
     */
    public static GUILD_DELETE(client: Client, data: ApiEvents["GuildDelete"]) {
        client.emit("guildDelete", new Guild(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_EMOJIS_UPDATE" event.
     */
    public static GUILD_EMOJIS_UPDATE(client: Client, data: ApiEvents["GuildEmojisUpdate"]) {
        client.emit("guildEmojisUpdate", {
            guildId: data.guild_id,
            emojis: data.emojis.map((emoji) => new Emoji(emoji))
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_INTEGRATIONS_UPDATE" event.
     */
    public static GUILD_INTEGRATIONS_UPDATE(client: Client, data: ApiEvents["GuildIntegrationsUpdate"]) {
        client.emit("guildIntegrationsUpdate", {
            guildId: data.guild_id,
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_ADD" event.
     */
    public static GUILD_MEMBER_ADD(client: Client, data: ApiEvents["GuildMemberAdd"]) {
        client.emit("guildMemberAdd", new GuildMember(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_REMOVE" event.
     */
    public static GUILD_MEMBER_REMOVE(client: Client, data: ApiEvents["GuildMemberRemove"]) {
        client.emit("guildMemberRemove", new GuildMember(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_UPDATE" event.
     */
    public static GUILD_MEMBER_UPDATE(client: Client, data: ApiEvents["GuildMemberUpdate"]) {
        client.emit("guildMemberUpdate", {
            avatar: data.avatar,
            communicationDisabledUntil: data.communication_disabled_until ?? null,
            deaf: !!data.deaf,
            guildId: data.guild_id,
            joinedAt: data.joined_at,
            mute: !!data.mute,
            nick: data.nick ?? null,
            pending: !!data.pending,
            premiumSince: data.premium_since,
            roles: data.roles,
            user: new User(data.user)
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBERS_CHUNK" event.
     */
    public static GUILD_MEMBERS_CHUNK(client: Client, data: ApiEvents["GuildMembersChunk"]) {
        client.emit("guildMembersChunk", {
            chunkCount: data.chunk_count,
            chunkIndex: data.chunk_index,
            guildId: data.guild_id,
            members: data.members.map((member) => new GuildMember(member)),
            nonce: data.nonce ?? null,
            notFound: data.not_found ?? [],
            presences: data.presences.map((presence) => new Presence(presence))
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_CREATE" event.
     */
    public static GUILD_ROLE_CREATE(client: Client, data: ApiEvents["GuildRoleCreate"]) {
        client.emit("guildRoleCreate", {
            guildId: data.guild_id,
            role: new Role(data.role)
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_DELETE" event.
     */
    public static GUILD_ROLE_DELETE(client: Client, data: ApiEvents["GuildRoleDelete"]) {
        client.emit("guildRoleCreate", {
            guildId: data.guild_id,
            roleId: data.role_id
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_UPDATE" event.
     */
    public static GUILD_ROLE_UPDATE(client: Client, data: ApiEvents["GuildRoleUpdate"]) {
        client.emit("guildRoleUpdate", {
            guildId: data.guild_id,
            role: new Role(data.role)
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_CREATE" event.
     */
    public static GUILD_SCHEDULED_EVENT_CREATE(client: Client, data: ApiEvents["GuildScheduledEventCreate"]) {
        client.emit("guildScheduledEventCreate", new GuildScheduledEvent(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_DELETE" event.
     */
    public static GUILD_SCHEDULED_EVENT_DELETE(client: Client, data: ApiEvents["GuildScheduledEventDelete"]) {
        client.emit("guildScheduledEventDelete", new GuildScheduledEvent(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_UPDATE" event.
     */
    public static GUILD_SCHEDULED_EVENT_UPDATE(client: Client, data: ApiEvents["GuildScheduledEventUpdate"]) {
        client.emit("guildScheduledEventUpdate", new GuildScheduledEvent(data));
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_STICKERS_UPDATE" event.
     */
    public static GUILD_STICKERS_UPDATE(client: Client, data: ApiEvents["GuildStickersUpdate"]) {
        client.emit("guildStickersUpdate", {
            guildId: data.guild_id,
            stickers: data.stickers.map((sticker) => new Sticker(sticker))
        });
    }

    /**
     * 
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_UPDATE" event.
     */
    public static GUILD_UPDATE(client: Client, data: ApiEvents["GuildUpdate"]) {
        client.emit("guildUpdate", new Guild(data));
    }

    public static INTERACTION_CREATE(client: Client, data: ApiEvents["InteractionCreate"]) {
        const interaction = new Interaction(data);

        if (data.guild_id) {
            client.guilds.fetch(data.guild_id).then((guild) => {
                if (guild && data.channel_id) {
                    client.channels.fetch(data.channel_id).then((channel) => {
                        if (channel?.type == ChannelType.GUILD_TEXT) interaction.channel = new GuildTextChannel(guild, channel);
                        if (data.type == InteractionType.APPLICATION_COMMAND) if (Registry.commands.find((command) => command.name == interaction.commandName)?.execute(client, interaction))
                            client.emit("interactionCreate", interaction);
                    })
                } else {
                    if (data.type == InteractionType.APPLICATION_COMMAND) if (Registry.commands.find((command) => command.name == interaction.commandName)?.execute(client, interaction))
                        client.emit("interactionCreate", interaction);
                }
            })
        } else {
            if (data.type == InteractionType.APPLICATION_COMMAND) if (Registry.commands.find((command) => command.name == interaction.commandName)?.execute(client, interaction))
                client.emit("interactionCreate", interaction);
        }
    }

    /**
     * Handles the "MESSAGE_CREATE" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "MESSAGE_CREATE" event.
     */
    public static MESSAGE_CREATE(client: Client, data: ApiEvents["MessageCreate"]) {
        // Emit a "messageCreate" event with the received data.
        data.client = client;
        if (data.guild_id) client.fetchGuild(data.guild_id).then((guild) => {
            data.guild = guild;
            client.fetchChannel(data.channel_id).then((channel) => {
                data.channel = channel;
                data.channel.client = client;
                client.emit("messageCreate", new Message(data));
                for (const plugin of Registry.plugins) {
                    plugin.onMessageCreate(client, new Message(data));
                }
            })
        })
    }

    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "READY" event.
     */
    public static READY(client: Client, data: ApiEvents["Ready"]) {
        data.user.client = client;
        // Initialize the client's user with the provided data.
        client.user = new User(data.user);

        // Emit a "ready" event with the client as the argument.
        client.emit("ready", client);

        for (const plugin of Registry.plugins) {
            plugin.onReady(client);
        }
    }
}
