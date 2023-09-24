import { ApiGuild } from "../interfaces/ApiGuild";
import { Emoji } from "./Emoji";
import { Role } from "./Role";
import { Sticker } from "./Sticker";
import { WelcomeScreen } from "./WelcomeScreen";

/**
 * Represents a guild (server).
 */
export class Guild {
    
    /**
     * The ID of the AFK channel, or null if not provided.
     * @type {string | null}
     */
    public afkChannelId: string | null;

    /**
     * The AFK timeout in seconds.
     * @type {number}
     */
    public afkTimeout: number;

    /**
     * The application ID, or null if not provided.
     * @type {string | null}
     */
    public applicationId: string | null;

    /**
     * The approximate member count, or null if not provided.
     * @type {number | null}
     */
    public approximateMemberCount: number | null;

    /**
     * The approximate presence count, or null if not provided.
     * @type {number | null}
     */
    public approximatePresenceCount: number | null;

    /**
     * The banner image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    public banner: string | null;

    /**
     * The default message notification level.
     * @type {number}
     */
    public defaultMessageNotifications: number;

    /**
     * The description of the guild, or null if not provided.
     * @type {string | null}
     */
    public description: string | null;

    /**
     * The discovery splash image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    public discoverySplash: string | null;

    /**
     * The array of emojis in the guild.
     * @type {Emoji[]}
     */
    public emojis: Emoji[];

    /**
     * The explicit content filter level.
     * @type {number}
     */
    public explicitContentFilter: number;

    /**
     * The features supported by the guild.
     * @type {string[]}
     */
    public features: string[];

    /**
     * The icon image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    public icon: string | null;

    /**
     * The icon hash of the guild, or null if not provided.
     * @type {string | null}
     */
    public iconHash: string | null;

    /**
     * The ID of the guild.
     * @type {string}
     */
    public id: string;

    /**
     * The maximum number of members the guild can have, or null if not provided.
     * @type {number | null}
     */
    public maxMembers: number | null;

    /**
     * The maximum number of presences the guild can have, or null if not provided.
     * @type {number | null}
     */
    public maxPresences: number | null;

    /**
     * The maximum number of users in a stage video channel, or null if not provided.
     * @type {number | null}
     */
    public maxStageVideoChannelUsers: number | null;

    /**
     * The maximum number of users in a video channel, or null if not provided.
     * @type {number | null}
     */
    public maxVideoChannelUsers: number | null;

    /**
     * The level of multi-factor authentication required.
     * @type {number}
     */
    public mfaLevel: number;

    /**
     * The name of the guild.
     * @type {string}
     */
    public name: string;

    /**
     * The NSFW (Not Safe for Work) content level.
     * @type {number}
     */
    public nsfwLevel: number;

    /**
     * Indicates whether the current user is the owner of the guild.
     * @type {boolean}
     */
    public owner: boolean;

    /**
     * The ID of the owner of the guild.
     * @type {string}
     */
    public ownerId: string;

    /**
     * The permissions of the current user in the guild, or null if not provided.
     * @type {string | null}
     */
    public permissions: string | null;

    /**
     * The preferred locale of the guild.
     * @type {string}
     */
    public preferredLocale: string;

    /**
     * Indicates whether the premium progress bar is enabled.
     * @type {boolean}
     */
    public premiumProgressBarEnabled: boolean;

    /**
     * The number of premium subscriptions, or null if not provided.
     * @type {number | null}
     */
    public premiumSubscriptionCount: number | null;

    /**
     * The premium tier level.
     * @type {number}
     */
    public premiumTier: number;

    /**
     * The ID of the channel where public updates are sent, or null if not provided.
     * @type {string | null}
     */
    public publicUpdatesChannelId: string | null;

    /**
     * The region of the guild, or null if not provided.
     * @type {string | null}
     */
    public region: string | null;

    /**
     * The array of roles in the guild.
     * @type {Role[]}
     */
    public roles: Role[];

    /**
     * The ID of the channel where rules are displayed, or null if not provided.
     * @type {string | null}
     */
    public rulesChannelId: string | null;

    /**
     * The ID of the channel for safety alerts, or null if not provided.
     * @type {string | null}
     */
    public safetyAlertsChannelId: string | null;

    /**
     * The splash image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    public splash: string | null;

    /**
     * The array of stickers associated with the guild, or undefined if not provided.
     * @type {Sticker[]}
     */
    public stickers: Sticker[];

    /**
     * The system channel flags.
     * @type {number}
     */
    public systemChannelFlags: number;

    /**
     * The ID of the system channel, or null if not provided.
     * @type {string | null}
     */
    public systemChannelId: string | null;

    /**
     * The vanity URL code, or null if not provided.
     * @type {string | null}
     */
    public vanityUrlCode: string | null;

    /**
     * The verification level of the guild.
     * @type {number}
     */
    public verificationLevel: number;

    /**
     * The welcome screen configuration, or null if not provided.
     * @type {WelcomeScreen | null}
     */
    public welcomeScreen: WelcomeScreen | null;

    /**
     * The ID of the widget channel, or null if not provided.
     * @type {string | null}
     */
    public widgetChannelId: string | null;

    /**
     * Indicates whether the widget is enabled.
     * @type {boolean}
     */
    public widgetEnabled: boolean;

    /**
     * Creates a new Guild instance.
     * @param {ApiGuild} data - The data object containing guild information.
     */
    constructor(data: ApiGuild) {
        this.afkChannelId = data.afk_channel_id;
        this.afkTimeout = data.afk_timeout;
        this.applicationId = data.application_id;
        this.approximateMemberCount = data.approximate_member_count ?? null;
        this.approximatePresenceCount = data.approximate_presence_count ?? null;
        this.banner = data.banner;
        this.defaultMessageNotifications = data.default_message_notifications;
        this.description = data.description;
        this.discoverySplash = data.discovery_splash;
        this.emojis = data.emojis.map((emoji) => new Emoji(emoji));
        this.explicitContentFilter = data.explicit_content_filter;
        this.features = data.features;
        this.icon = data.icon;
        this.iconHash = data.icon_hash ?? null;
        this.id = data.id;
        this.maxMembers = data.max_members ?? null;
        this.maxPresences = data.max_presences ?? null;
        this.maxStageVideoChannelUsers = data.max_stage_video_channel_users ?? null;
        this.maxVideoChannelUsers = data.max_video_channel_users ?? null;
        this.mfaLevel = data.mfa_level;
        this.name = data.name;
        this.nsfwLevel = data.nsfw_level;
        this.owner = !!data.owner;
        this.ownerId = data.owner_id;
        this.permissions = data.permissions ?? null;
        this.preferredLocale = data.preferred_locale;
        this.premiumProgressBarEnabled = data.premium_progress_bar_enabled;
        this.premiumSubscriptionCount = data.premium_subscription_count ?? null;
        this.premiumTier = data.premium_tier;
        this.publicUpdatesChannelId = data.public_updates_channel_id;
        this.region = data.region ?? null;
        this.roles = data.roles.map((role) => new Role(role));
        this.rulesChannelId = data.rules_channel_id;
        this.safetyAlertsChannelId = data.safety_alerts_channel_id;
        this.splash = data.splash;
        this.stickers = data.stickers ? data.stickers?.map((sticker) => new Sticker(sticker)) : [];
        this.systemChannelFlags = data.system_channel_flags;
        this.systemChannelId = data.system_channel_id;
        this.vanityUrlCode = data.vanity_url_code;
        this.verificationLevel = data.verification_level;
        this.welcomeScreen = data.welcome_screen ? new WelcomeScreen(data.welcome_screen) : null;
        this.widgetChannelId = data.widget_channel_id ?? null;
        this.widgetEnabled = !!data.widget_enabled;
    }
}