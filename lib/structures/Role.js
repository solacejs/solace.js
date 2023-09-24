"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTag = exports.Role = void 0;
/**
 * Represents a role within a guild or server.
 */
class Role {
    /**
     * Creates a new Role instance.
     * @param {ApiRole} data - The data object containing role information.
     */
    constructor(data) {
        var _a, _b, _c;
        this.color = data.color;
        this.flags = data.flags;
        this.hoist = data.hoist;
        this.icon = (_a = data.icon) !== null && _a !== void 0 ? _a : null;
        this.id = data.id;
        this.managed = data.managed;
        this.mentionable = data.mentionable;
        this.name = data.name;
        this.permissions = data.permissions;
        this.position = data.position;
        this.tags = (_b = data.tags) === null || _b === void 0 ? void 0 : _b.map((tag) => new RoleTag(tag));
        this.unicodeEmoji = (_c = data.unicode_emoji) !== null && _c !== void 0 ? _c : null;
    }
}
exports.Role = Role;
/**
 * Represents additional tags associated with a role.
 */
class RoleTag {
    /**
     * Creates a new RoleTag instance.
     * @param {ApiRoleTag} data - The data object containing role tag information.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.availableForPurchase = (_a = data.available_for_purchase) !== null && _a !== void 0 ? _a : null;
        this.botId = (_b = data.bot_id) !== null && _b !== void 0 ? _b : null;
        this.guildConnections = (_c = data.guild_connections) !== null && _c !== void 0 ? _c : null;
        this.integrationId = (_d = data.integration_id) !== null && _d !== void 0 ? _d : null;
        this.premiumSubscriber = (_e = data.premium_subscriber) !== null && _e !== void 0 ? _e : null;
        this.subscriptionListingId = (_f = data.subscription_listing_id) !== null && _f !== void 0 ? _f : null;
    }
}
exports.RoleTag = RoleTag;
