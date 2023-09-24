import { Channel } from "../structures/Channel";
/**
 * Represents the structure of a voice channel within a guild (server).
 */
export interface ApiGuildVoiceChannel extends Channel {
    /**
     * The bitrate (voice quality) of the voice channel.
     */
    bitrate: number;
    /**
     * The ID of the guild to which this voice channel belongs.
     */
    guild_id: string;
    /**
     * The name of the voice channel.
     */
    name: string;
    /**
     * Indicates whether the voice channel is marked as NSFW (Not Safe For Work).
     */
    nsfw: boolean;
    /**
     * The ID of the parent category (if any) that this channel belongs to, or null if none.
     */
    parent_id: string | null;
    /**
     * An array of permission overwrites for this voice channel.
     */
    permission_overwrites: any[];
    /**
     * The position of the voice channel within the guild's channel list.
     */
    position: number;
    /**
     * The rate limit (slow mode) for users in this voice channel, in seconds.
     */
    rate_limit_per_user: number;
    /**
     * The RTC (Real-Time Communication) region for the voice channel, or null if unspecified.
     */
    rtc_region: string | null;
    /**
     * The maximum number of users that can be in the voice channel.
     */
    user_limit: number;
}
