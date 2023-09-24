import IEmoji from "./ApiEmoji";
import IRole from "./ApiRole";
import ISticker from "./ApiSticker";
export default interface ApiGuild {
    afk_channel_id: string | null;
    afk_timeout: number;
    application_id: string | null;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    banner: string | null;
    default_message_notifications: number;
    description: string | null;
    discovery_splash: string | null;
    emojis: IEmoji[];
    explicit_content_filter: number;
    features: string[];
    icon: string | null;
    icon_hash?: string | null;
    id: string;
    max_members?: number;
    max_presences?: number | null;
    max_stage_video_channel_users?: number;
    max_video_channel_users?: number;
    mfa_level: number;
    name: string;
    nsfw_level: number;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    preferred_locale: string;
    premium_progress_bar_enabled: boolean;
    premium_subscription_count?: number;
    premium_tier: number;
    public_updates_channel_id: string | null;
    region?: string | null;
    roles: IRole[];
    rules_channel_id: string | null;
    safety_alerts_channel_id: string | null;
    splash: string | null;
    stickers?: ISticker[];
    system_channel_flags: number;
    system_channel_id: string | null;
    vanity_url_code: string | null;
    verification_level: number;
    welcome_screen?: ApiGuildWelcomeScreen;
    widget_channel_id?: string | null;
    widget_enabled?: boolean;
}
export interface ApiGuildWelcomeScreen {
    description: string | null;
    welcome_channels: ApiGuildWelcomeScreenChannel;
}
export interface ApiGuildWelcomeScreenChannel {
    channel_id: string;
    description: string;
    emoji_id: string | null;
    emoji_name: string | null;
}
