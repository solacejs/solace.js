"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a user on Discord.
 */
class User {
    /**
     * Constructs a new User instance.
     * @param {IUser} data - The user data.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.accentColor = (_a = data.accent_color) !== null && _a !== void 0 ? _a : null;
        this.avatar = data.avatar;
        this.avatarDecoration = (_b = data.avatar_decoration) !== null && _b !== void 0 ? _b : null;
        this.banner = (_c = data.banner) !== null && _c !== void 0 ? _c : null;
        this.bot = !!data.bot;
        this.discriminator = data.discriminator;
        this.email = (_d = data.email) !== null && _d !== void 0 ? _d : null;
        this.flags = (_e = data.flags) !== null && _e !== void 0 ? _e : null;
        this.globalName = data.global_name;
        this.id = data.id;
        this.locale = (_f = data.locale) !== null && _f !== void 0 ? _f : null;
        this.mfaEnabled = !!data.mfa_enabled;
        this.premiumType = (_g = data.premium_type) !== null && _g !== void 0 ? _g : null;
        this.publicFlags = (_h = data.public_flags) !== null && _h !== void 0 ? _h : null;
        this.system = !!data.system;
        this.username = data.username;
        this.verified = !!data.verified;
    }
}
exports.default = User;
