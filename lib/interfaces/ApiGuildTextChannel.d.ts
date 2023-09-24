/**
 * Represents the structure of a text channel within a guild (server).
 */
export interface ApiGuildTextChannel {
    /**
     * The default auto-archive duration for messages in this channel, in seconds.
     */
    default_auto_archive_duration: number;
    /**
     * The ID of the guild to which this text channel belongs.
     */
    guild_id: string;
    /**
     * The unique ID of the text channel.
     */
    id: string;
    /**
     * The ID of the last message sent in this channel.
     */
    last_message_id: string;
    /**
     * The name of the text channel.
     */
    name: string;
    /**
     * Indicates whether the text channel is marked as NSFW (Not Safe For Work).
     */
    nsfw: boolean;
    /**
     * The ID of the parent category (if any) that this channel belongs to.
     */
    parent_id: string;
    /**
     * An array of permission overwrites for this channel, or null if none exist.
     */
    permission_overwrites?: (null)[] | null;
    /**
     * The position of the text channel within the guild's channel list.
     */
    position: number;
    /**
     * The rate limit (slow mode) for users in this channel, in seconds.
     */
    rate_limit_per_user: number;
    /**
     * The topic or description of the text channel.
     */
    topic: string;
    /**
     * The type of the channel.
     */
    type: number;
}
