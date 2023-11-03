"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const Registry_1 = require("../factory/Registry");
const AuditLogEntry_1 = require("../structures/AuditLogEntry");
const Channel_1 = require("../structures/Channel");
const Emoji_1 = require("../structures/Emoji");
const Guild_1 = require("../structures/Guild");
const GuildMember_1 = require("../structures/GuildMember");
const GuildScheduledEvent_1 = require("../structures/GuildScheduledEvent");
const GuildTextChannel_1 = require("../structures/GuildTextChannel");
const Interaction_1 = require("../structures/Interaction");
const Message_1 = require("../structures/Message");
const Presence_1 = require("../structures/Presence");
const Role_1 = require("../structures/Role");
const Sticker_1 = require("../structures/Sticker");
const User_1 = require("../structures/User");
/**
 * A utility class for handling Discord events received by the client.
 */
class EventHandler {
    static createMessage(client, data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.client = client;
            if (data.guild_id)
                yield client.fetchGuild(data.guild_id).then((guild) => __awaiter(this, void 0, void 0, function* () {
                    data.guild = guild;
                    yield client.fetchChannel(data.channel_id).then((channel) => {
                        data.channel = channel;
                        data.channel.client = client;
                    });
                }));
            return new Message_1.Message(data);
        });
    }
    /**
     * Handles the "CHANNEL_CREATE" event.
     * @param client - The client instance.
     * @param data - The data associated with the "CHANNEL_CREATE" event.
     */
    static CHANNEL_CREATE(client, data) {
        client.emit("channelCreate", new Channel_1.Channel(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - Tje data associated with the "CHANNEL_DELETE" event.
     */
    static CHANNEL_DELETE(client, data) {
        client.emit("channelDelete", new Channel_1.Channel(data));
    }
    static CHANNEL_PINS_UPDATE(client, data) {
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
    static CHANNEL_UPDATE(client, data) {
        client.emit("channelUpdate", new Channel_1.Channel(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_AUDIT_LOG_ENTRY_CREATE" event.
     */
    static GUILD_AUDIT_LOG_ENTRY_CREATE(client, data) {
        client.emit("guildAuditLogEntryCreate", new AuditLogEntry_1.AuditLogEntry(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_ADD" event.
     */
    static GUILD_BAN_ADD(client, data) {
        client.emit("guildBanAdd", {
            guildId: data.guild_id,
            user: new User_1.User(data.user)
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_BAN_REMOVE" event.
     */
    static GUILD_BAN_REMOVE(client, data) {
        client.emit("guildBanRemove", {
            guildId: data.guild_id,
            user: new User_1.User(data.user)
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_CREATE" event.
     */
    static GUILD_CREATE(client, data) {
        client.emit("guildCreate", new Guild_1.Guild(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_DELETE" event.
     */
    static GUILD_DELETE(client, data) {
        client.emit("guildDelete", new Guild_1.Guild(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_EMOJIS_UPDATE" event.
     */
    static GUILD_EMOJIS_UPDATE(client, data) {
        client.emit("guildEmojisUpdate", {
            guildId: data.guild_id,
            emojis: data.emojis.map((emoji) => new Emoji_1.Emoji(emoji))
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_INTEGRATIONS_UPDATE" event.
     */
    static GUILD_INTEGRATIONS_UPDATE(client, data) {
        client.emit("guildIntegrationsUpdate", {
            guildId: data.guild_id,
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_ADD" event.
     */
    static GUILD_MEMBER_ADD(client, data) {
        client.emit("guildMemberAdd", new GuildMember_1.GuildMember(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_REMOVE" event.
     */
    static GUILD_MEMBER_REMOVE(client, data) {
        client.emit("guildMemberRemove", new GuildMember_1.GuildMember(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBER_UPDATE" event.
     */
    static GUILD_MEMBER_UPDATE(client, data) {
        var _a, _b;
        client.emit("guildMemberUpdate", {
            avatar: data.avatar,
            communicationDisabledUntil: (_a = data.communication_disabled_until) !== null && _a !== void 0 ? _a : null,
            deaf: !!data.deaf,
            guildId: data.guild_id,
            joinedAt: data.joined_at,
            mute: !!data.mute,
            nick: (_b = data.nick) !== null && _b !== void 0 ? _b : null,
            pending: !!data.pending,
            premiumSince: data.premium_since,
            roles: data.roles,
            user: new User_1.User(data.user)
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_MEMBERS_CHUNK" event.
     */
    static GUILD_MEMBERS_CHUNK(client, data) {
        var _a, _b;
        client.emit("guildMembersChunk", {
            chunkCount: data.chunk_count,
            chunkIndex: data.chunk_index,
            guildId: data.guild_id,
            members: data.members.map((member) => new GuildMember_1.GuildMember(member)),
            nonce: (_a = data.nonce) !== null && _a !== void 0 ? _a : null,
            notFound: (_b = data.not_found) !== null && _b !== void 0 ? _b : [],
            presences: data.presences.map((presence) => new Presence_1.Presence(presence))
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_CREATE" event.
     */
    static GUILD_ROLE_CREATE(client, data) {
        client.emit("guildRoleCreate", {
            guildId: data.guild_id,
            role: new Role_1.Role(data.role)
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_ROLE_DELETE" event.
     */
    static GUILD_ROLE_DELETE(client, data) {
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
    static GUILD_ROLE_UPDATE(client, data) {
        client.emit("guildRoleUpdate", {
            guildId: data.guild_id,
            role: new Role_1.Role(data.role)
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_CREATE" event.
     */
    static GUILD_SCHEDULED_EVENT_CREATE(client, data) {
        client.emit("guildScheduledEventCreate", new GuildScheduledEvent_1.GuildScheduledEvent(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_DELETE" event.
     */
    static GUILD_SCHEDULED_EVENT_DELETE(client, data) {
        client.emit("guildScheduledEventDelete", new GuildScheduledEvent_1.GuildScheduledEvent(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_SCHEDULED_EVENT_UPDATE" event.
     */
    static GUILD_SCHEDULED_EVENT_UPDATE(client, data) {
        client.emit("guildScheduledEventUpdate", new GuildScheduledEvent_1.GuildScheduledEvent(data));
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_STICKERS_UPDATE" event.
     */
    static GUILD_STICKERS_UPDATE(client, data) {
        client.emit("guildStickersUpdate", {
            guildId: data.guild_id,
            stickers: data.stickers.map((sticker) => new Sticker_1.Sticker(sticker))
        });
    }
    /**
     *
     * @param client - The client instance.
     * @param data - The data associated with the "GUILD_UPDATE" event.
     */
    static GUILD_UPDATE(client, data) {
        client.emit("guildUpdate", new Guild_1.Guild(data));
    }
    static INTERACTION_CREATE(client, data) {
        var _a;
        const interaction = new Interaction_1.Interaction(data);
        if (data.guild_id) {
            client.guilds.fetch(data.guild_id).then((guild) => {
                var _a;
                if (guild && data.channel_id) {
                    client.channels.fetch(data.channel_id).then((channel) => {
                        var _a;
                        if ((channel === null || channel === void 0 ? void 0 : channel.type) == Channel_1.ChannelType.GUILD_TEXT)
                            interaction.channel = new GuildTextChannel_1.GuildTextChannel(guild, channel);
                        if (data.type == Interaction_1.InteractionType.APPLICATION_COMMAND)
                            if ((_a = Registry_1.Registry.commands.find((command) => command.name == interaction.commandName)) === null || _a === void 0 ? void 0 : _a.execute(client, interaction))
                                client.emit("interactionCreate", interaction);
                    });
                }
                else {
                    if (data.type == Interaction_1.InteractionType.APPLICATION_COMMAND)
                        if ((_a = Registry_1.Registry.commands.find((command) => command.name == interaction.commandName)) === null || _a === void 0 ? void 0 : _a.execute(client, interaction))
                            client.emit("interactionCreate", interaction);
                }
            });
        }
        else {
            if (data.type == Interaction_1.InteractionType.APPLICATION_COMMAND)
                if ((_a = Registry_1.Registry.commands.find((command) => command.name == interaction.commandName)) === null || _a === void 0 ? void 0 : _a.execute(client, interaction))
                    client.emit("interactionCreate", interaction);
        }
    }
    /**
     * Handles the "MESSAGE_CREATE" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "MESSAGE_CREATE" event.
     */
    static MESSAGE_CREATE(client, data) {
        // Emit a "messageCreate" event with the received data.
        data.client = client;
        if (data.guild_id)
            client.fetchGuild(data.guild_id).then((guild) => {
                data.guild = guild;
                client.fetchChannel(data.channel_id).then((channel) => {
                    data.channel = channel;
                    data.channel.client = client;
                    client.emit("messageCreate", new Message_1.Message(data));
                    for (const plugin of Registry_1.Registry.plugins) {
                        plugin.onMessageCreate(client, new Message_1.Message(data));
                    }
                });
            });
    }
    /**
     * Handles the "READY" event.
     * @param {Client} client - The client instance.
     * @param data - The data associated with the "READY" event.
     */
    static READY(client, data) {
        data.user.client = client;
        // Initialize the client's user with the provided data.
        client.user = new User_1.User(data.user);
        // Emit a "ready" event with the client as the argument.
        client.emit("ready", client);
        for (const plugin of Registry_1.Registry.plugins) {
            plugin.onReady(client);
        }
    }
}
exports.EventHandler = EventHandler;
