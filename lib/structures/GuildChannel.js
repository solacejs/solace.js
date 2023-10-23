"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildChannel = void 0;
const Channel_1 = require("./Channel");
/**
 * Represents a channel within a guild (server).
 */
class GuildChannel extends Channel_1.Channel {
    /**
     * Constructs a new GuildChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild channel.
     */
    constructor(guild, data) {
        var _a;
        super(data);
        this.guild = guild;
        this.guildId = (_a = guild === null || guild === void 0 ? void 0 : guild.id) !== null && _a !== void 0 ? _a : data.guild_id;
    }
}
exports.GuildChannel = GuildChannel;
