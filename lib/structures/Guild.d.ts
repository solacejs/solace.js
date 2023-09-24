import { ApiGuild } from "../interfaces/ApiGuild";
import { Emoji } from "./Emoji";
import { Role } from "./Role";
import { Sticker } from "./Sticker";
import { WelcomeScreen } from "./WelcomeScreen";
/**
 * Represents a guild (server).
 */
export declare class Guild {
    /**
     * The ID of the AFK channel, or null if not provided.
     * @type {string | null}
     */
    afkChannelId: string | null;
    /**
     * The AFK timeout in seconds.
     * @type {number}
     */
    afkTimeout: number;
    /**
     * The application ID, or null if not provided.
     * @type {string | null}
     */
    applicationId: string | null;
    /**
     * The approximate member count, or null if not provided.
     * @type {number | null}
     */
    approximateMemberCount: number | null;
    /**
     * The approximate presence count, or null if not provided.
     * @type {number | null}
     */
    approximatePresenceCount: number | null;
    /**
     * The banner image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    banner: string | null;
    /**
     * The default message notification level.
     * @type {number}
     */
    defaultMessageNotifications: number;
    /**
     * The description of the guild, or null if not provided.
     * @type {string | null}
     */
    description: string | null;
    /**
     * The discovery splash image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    discoverySplash: string | null;
    /**
     * The array of emojis in the guild.
     * @type {Emoji[]}
     */
    emojis: Emoji[];
    /**
     * The explicit content filter level.
     * @type {number}
     */
    explicitContentFilter: number;
    /**
     * The features supported by the guild.
     * @type {string[]}
     */
    features: string[];
    /**
     * The icon image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    icon: string | null;
    /**
     * The icon hash of the guild, or null if not provided.
     * @type {string | null}
     */
    iconHash: string | null;
    /**
     * The ID of the guild.
     * @type {string}
     */
    id: string;
    /**
     * The maximum number of members the guild can have, or null if not provided.
     * @type {number | null}
     */
    maxMembers: number | null;
    /**
     * The maximum number of presences the guild can have, or null if not provided.
     * @type {number | null}
     */
    maxPresences: number | null;
    /**
     * The maximum number of users in a stage video channel, or null if not provided.
     * @type {number | null}
     */
    maxStageVideoChannelUsers: number | null;
    /**
     * The maximum number of users in a video channel, or null if not provided.
     * @type {number | null}
     */
    maxVideoChannelUsers: number | null;
    /**
     * The level of multi-factor authentication required.
     * @type {number}
     */
    mfaLevel: number;
    /**
     * The name of the guild.
     * @type {string}
     */
    name: string;
    /**
     * The NSFW (Not Safe for Work) content level.
     * @type {number}
     */
    nsfwLevel: number;
    /**
     * Indicates whether the current user is the owner of the guild.
     * @type {boolean}
     */
    owner: boolean;
    /**
     * The ID of the owner of the guild.
     * @type {string}
     */
    ownerId: string;
    /**
     * The permissions of the current user in the guild, or null if not provided.
     * @type {string | null}
     */
    permissions: string | null;
    /**
     * The preferred locale of the guild.
     * @type {string}
     */
    preferredLocale: string;
    /**
     * Indicates whether the premium progress bar is enabled.
     * @type {boolean}
     */
    premiumProgressBarEnabled: boolean;
    /**
     * The number of premium subscriptions, or null if not provided.
     * @type {number | null}
     */
    premiumSubscriptionCount: number | null;
    /**
     * The premium tier level.
     * @type {number}
     */
    premiumTier: number;
    /**
     * The ID of the channel where public updates are sent, or null if not provided.
     * @type {string | null}
     */
    publicUpdatesChannelId: string | null;
    /**
     * The region of the guild, or null if not provided.
     * @type {string | null}
     */
    region: string | null;
    /**
     * The array of roles in the guild.
     * @type {Role[]}
     */
    roles: Role[];
    /**
     * The ID of the channel where rules are displayed, or null if not provided.
     * @type {string | null}
     */
    rulesChannelId: string | null;
    /**
     * The ID of the channel for safety alerts, or null if not provided.
     * @type {string | null}
     */
    safetyAlertsChannelId: string | null;
    /**
     * The splash image URL of the guild, or null if not provided.
     * @type {string | null}
     */
    splash: string | null;
    /**
     * The array of stickers associated with the guild, or undefined if not provided.
     * @type {Sticker[]}
     */
    stickers: Sticker[];
    /**
     * The system channel flags.
     * @type {number}
     */
    systemChannelFlags: number;
    /**
     * The ID of the system channel, or null if not provided.
     * @type {string | null}
     */
    systemChannelId: string | null;
    /**
     * The vanity URL code, or null if not provided.
     * @type {string | null}
     */
    vanityUrlCode: string | null;
    /**
     * The verification level of the guild.
     * @type {number}
     */
    verificationLevel: number;
    /**
     * The welcome screen configuration, or null if not provided.
     * @type {WelcomeScreen | null}
     */
    welcomeScreen: WelcomeScreen | null;
    /**
     * The ID of the widget channel, or null if not provided.
     * @type {string | null}
     */
    widgetChannelId: string | null;
    /**
     * Indicates whether the widget is enabled.
     * @type {boolean}
     */
    widgetEnabled: boolean;
    /**
     * Creates a new Guild instance.
     * @param {ApiGuild} data - The data object containing guild information.
     */
    constructor(data: ApiGuild);
}
