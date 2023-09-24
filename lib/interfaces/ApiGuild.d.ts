import { ApiEmoji } from "./ApiEmoji";
import { ApiRole } from "./ApiRole";
import { ApiSticker } from "./ApiSticker";
/**
 * Represents the structure of a guild (server).
 */
export interface ApiGuild {
    /**
     * The ID of the AFK (Away From Keyboard) channel within the guild, or null if not set.
     */
    afk_channel_id: string | null;
    /**
     * The timeout (in seconds) for AFK users in the AFK channel.
     */
    afk_timeout: number;
    /**
     * The ID of the application associated with the guild, or null if not applicable.
     */
    application_id: string | null;
    /**
     * An approximate count of guild members.
     */
    approximate_member_count?: number;
    /**
     * An approximate count of members currently online.
     */
    approximate_presence_count?: number;
    /**
     * The banner image of the guild, or null if not set.
     */
    banner: string | null;
    /**
     * The default message notification level for the guild.
     */
    default_message_notifications: number;
    /**
     * A description of the guild, or null if not provided.
     */
    description: string | null;
    /**
     * The discovery splash image of the guild, or null if not set.
     */
    discovery_splash: string | null;
    /**
     * An array of emojis associated with the guild.
     */
    emojis: ApiEmoji[];
    /**
     * The explicit content filter level for the guild.
     */
    explicit_content_filter: number;
    /**
     * An array of feature strings describing the guild's features.
     */
    features: string[];
    /**
     * The icon image of the guild, or null if not set.
     */
    icon: string | null;
    /**
     * The icon hash for the guild's icon, or null if not set.
     */
    icon_hash?: string | null;
    /**
     * The unique identifier of the guild.
     */
    id: string;
    /**
     * The maximum number of members allowed in the guild.
     */
    max_members?: number;
    /**
     * The maximum number of presences allowed in the guild, or null if not set.
     */
    max_presences?: number | null;
    /**
     * The maximum number of users allowed in a stage video channel within the guild.
     */
    max_stage_video_channel_users?: number;
    /**
     * The maximum number of users allowed in a video channel within the guild.
     */
    max_video_channel_users?: number;
    /**
     * The level of multi-factor authentication (MFA) required for guild members.
     */
    mfa_level: number;
    /**
     * The name of the guild.
     */
    name: string;
    /**
     * The NSFW (Not Safe For Work) level of the guild.
     */
    nsfw_level: number;
    /**
     * Indicates whether the current user is the owner of the guild.
     */
    owner?: boolean;
    /**
     * The ID of the owner of the guild.
     */
    owner_id: string;
    /**
     * The permissions for the current user in the guild, or null if not applicable.
     */
    permissions?: string;
    /**
     * The preferred locale of the guild.
     */
    preferred_locale: string;
    /**
     * Indicates whether the premium progress bar is enabled.
     */
    premium_progress_bar_enabled: boolean;
    /**
     * The number of premium subscriptions for the guild, or null if not set.
     */
    premium_subscription_count?: number;
    /**
     * The premium tier level of the guild.
     */
    premium_tier: number;
    /**
     * The ID of the public updates channel, or null if not set.
     */
    public_updates_channel_id: string | null;
    /**
     * The region of the guild, or null if not set.
     */
    region?: string | null;
    /**
     * An array of roles within the guild.
     */
    roles: ApiRole[];
    /**
     * The ID of the rules channel, or null if not set.
     */
    rules_channel_id: string | null;
    /**
     * The ID of the safety alerts channel, or null if not set.
     */
    safety_alerts_channel_id: string | null;
    /**
     * The splash image of the guild, or null if not set.
     */
    splash: string | null;
    /**
     * An array of stickers associated with the guild.
     */
    stickers?: ApiSticker[];
    /**
     * The system channel flags for the guild.
     */
    system_channel_flags: number;
    /**
     * The ID of the system channel, or null if not set.
     */
    system_channel_id: string | null;
    /**
     * The vanity URL code for the guild, or null if not set.
     */
    vanity_url_code: string | null;
    /**
     * The verification level of the guild.
     */
    verification_level: number;
    /**
     * The welcome screen configuration for the guild, if available.
     */
    welcome_screen?: ApiGuildWelcomeScreen;
    /**
     * The ID of the widget channel, or null if not set.
     */
    widget_channel_id?: string | null;
    /**
     * Indicates whether the widget is enabled.
     */
    widget_enabled?: boolean;
}
/**
 * Represents the structure of a welcome screen configuration for a guild.
 */
export interface ApiGuildWelcomeScreen {
    /**
     * A description of the welcome screen, or null if not provided.
     */
    description: string | null;
    /**
     * An array of welcome screen channel configurations.
     */
    welcome_channels: ApiGuildWelcomeScreenChannel[];
}
/**
 * Represents the structure of a welcome screen channel configuration for a guild.
 */
export interface ApiGuildWelcomeScreenChannel {
    /**
     * The ID of the channel.
     */
    channel_id: string;
    /**
     * A description of the welcome screen channel, or null if not provided.
     */
    description: string;
    /**
     * The ID of the emoji associated with the welcome screen channel, or null if not provided.
     */
    emoji_id: string | null;
    /**
     * The name of the emoji associated with the welcome screen channel, or null if not provided.
     */
    emoji_name: string | null;
}
