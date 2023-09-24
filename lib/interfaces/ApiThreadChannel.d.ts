import { ApiChannel } from "./ApiChannel";
/**
 * Represents the structure of a thread channel, extending the base `ApiChannel`.
 */
export interface ApiThreadChannel extends ApiChannel {
    /**
     * The unique identifier (ID) of the guild to which the thread belongs.
     */
    guild_id: string;
    /**
     * The ID of the last message in the thread, or `null` if no message exists.
     */
    last_message_id: string | null;
    /**
     * The number of members in the thread.
     */
    member_count: number;
    /**
     * The total number of messages in the thread.
     */
    message_count: number;
    /**
     * The name of the thread, or `null` if not named.
     */
    name: string | null;
    /**
     * The unique identifier (ID) of the user who owns the thread.
     */
    owner_id: string;
    /**
     * The unique identifier (ID) of the parent message of the thread, or `null` if not a sub-thread.
     */
    parent_id: string | null;
    /**
     * The rate limit per user in the thread.
     */
    rate_limit_per_user: number;
    /**
     * Metadata about the thread.
     */
    thread_metadata: ApiThreadMetadata;
    /**
     * The total number of messages sent in the thread.
     */
    total_message_sent: number;
}
/**
 * Represents the structure of metadata about a thread channel.
 */
export interface ApiThreadMetadata {
    /**
     * The timestamp when the thread was archived.
     */
    archive_timestamp: string;
    /**
     * Indicates whether the thread is archived.
     */
    archived: boolean;
    /**
     * The duration (in minutes) for auto-archiving the thread.
     */
    auto_archive_duration: number;
    /**
     * Indicates whether the thread is locked.
     */
    locked: boolean;
}
