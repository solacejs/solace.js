"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMember = void 0;
const User_1 = require("./User");
/**
 * Represents a member of a guild.
 */
class GuildMember {
    /**
     * Creates a new GuildMember instance.
     * @param {ApiGuildMember} data - The data object containing member information.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e;
        this.avatar = (_a = data.avatar) !== null && _a !== void 0 ? _a : null;
        this.communicationDisabledUntil = (_b = data.communication_disabled_until) !== null && _b !== void 0 ? _b : null;
        this.deaf = data.deaf;
        this.flags = data.flags;
        this.joinedAt = data.joined_at;
        this.mute = data.mute;
        this.nick = (_c = data.nick) !== null && _c !== void 0 ? _c : null;
        this.pending = !!data.pending;
        this.permissions = (_d = data.permissions) !== null && _d !== void 0 ? _d : null;
        this.premiumSince = (_e = data.premium_since) !== null && _e !== void 0 ? _e : null;
        this.roles = data.roles;
        this.user = data.user ? new User_1.User(data.user) : null;
    }
}
exports.GuildMember = GuildMember;
