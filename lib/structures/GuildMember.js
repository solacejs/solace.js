"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class GuildMember {
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
        this.user = data.user ? new User_1.default(data.user) : null;
    }
}
exports.default = GuildMember;
