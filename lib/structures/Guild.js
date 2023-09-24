"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Emoji_1 = __importDefault(require("./Emoji"));
const Role_1 = __importDefault(require("./Role"));
const Sticker_1 = __importDefault(require("./Sticker"));
const WelcomeScreen_1 = __importDefault(require("./WelcomeScreen"));
class Guild {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.afkChannelId = data.afk_channel_id;
        this.afkTimeout = data.afk_timeout;
        this.applicationId = data.application_id;
        this.approximateMemberCount = (_a = data.approximate_member_count) !== null && _a !== void 0 ? _a : null;
        this.approximatePresenceCount = (_b = data.approximate_presence_count) !== null && _b !== void 0 ? _b : null;
        this.banner = data.banner;
        this.defaultMessageNotifications = data.default_message_notifications;
        this.description = data.description;
        this.discoverySplash = data.discovery_splash;
        this.emojis = data.emojis.map((emoji) => new Emoji_1.default(emoji));
        this.explicitContentFilter = data.explicit_content_filter;
        this.features = data.features;
        this.icon = data.icon;
        this.iconHash = (_c = data.icon_hash) !== null && _c !== void 0 ? _c : null;
        this.id = data.id;
        this.maxMembers = (_d = data.max_members) !== null && _d !== void 0 ? _d : null;
        this.maxPresences = (_e = data.max_presences) !== null && _e !== void 0 ? _e : null;
        this.maxStageVideoChannelUsers = (_f = data.max_stage_video_channel_users) !== null && _f !== void 0 ? _f : null;
        this.maxVideoChannelUsers = (_g = data.max_video_channel_users) !== null && _g !== void 0 ? _g : null;
        this.mfaLevel = data.mfa_level;
        this.name = data.name;
        this.nsfwLevel = data.nsfw_level;
        this.owner = !!data.owner;
        this.ownerId = data.owner_id;
        this.permissions = (_h = data.permissions) !== null && _h !== void 0 ? _h : null;
        this.preferredLocale = data.preferred_locale;
        this.premiumProgressBarEnabled = data.premium_progress_bar_enabled;
        this.premiumSubscriptionCount = (_j = data.premium_subscription_count) !== null && _j !== void 0 ? _j : null;
        this.premiumTier = data.premium_tier;
        this.publicUpdatesChannelId = data.public_updates_channel_id;
        this.region = (_k = data.region) !== null && _k !== void 0 ? _k : null;
        this.roles = data.roles.map((role) => new Role_1.default(role));
        this.rulesChannelId = data.rules_channel_id;
        this.safetyAlertsChannelId = data.safety_alerts_channel_id;
        this.splash = data.splash;
        this.stickers = (_l = data.stickers) === null || _l === void 0 ? void 0 : _l.map((sticker) => new Sticker_1.default(sticker));
        this.systemChannelFlags = data.system_channel_flags;
        this.systemChannelId = data.system_channel_id;
        this.vanityUrlCode = data.vanity_url_code;
        this.verificationLevel = data.verification_level;
        this.welcomeScreen = data.welcome_screen ? new WelcomeScreen_1.default(data.welcome_screen) : null;
        this.widgetChannelId = (_m = data.widget_channel_id) !== null && _m !== void 0 ? _m : null;
        this.widgetEnabled = !!data.widget_enabled;
    }
}
exports.default = Guild;
