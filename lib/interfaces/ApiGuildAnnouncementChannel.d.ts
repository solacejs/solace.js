/**
 * Represents the structure of an announcement channel in a guild (server).
 */
export interface ApiGuildAnnouncementChannel {
    /**
     * The default auto-archive duration for messages in this channel, in minutes.
     */
    default_auto_archive_duration: number;
    /**
     * The ID of the guild to which this announcement channel belongs.
     */
    guild_id: string;
    /**
     * The unique identifier of the announcement channel.
     */
    id: string;
    /**
     * The ID of the last message sent in this channel.
     */
    last_message_id: string;
    /**
     * The name of the announcement channel.
     */
    name: string;
    /**
     * Indicates whether the announcement channel is marked as NSFW (Not Safe For Work).
     */
    nsfw: boolean;
    /**
     * The ID of the parent category or channel of this announcement channel.
     */
    parent_id: string;
    /**
     * An array of permission overwrites for this channel, or null if not provided.
     */
    permission_overwrites?: (null)[] | null;
    /**
     * The position of the announcement channel in the list of channels within the guild.
     */
    position: number;
    /**
     * The topic or description of the announcement channel.
     */
    topic: string;
    /**
     * The type of channel.
     */
    type: number;
}
