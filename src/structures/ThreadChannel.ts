import { ApiThreadChannel, ApiThreadMetadata } from "../interfaces/ApiThreadChannel";
import { Channel } from "./Channel";

/**
 * Represents a thread channel, which is a specialized type of channel.
 */
export class ThreadChannel extends Channel {
    
    /**
     * The ID of the guild to which the thread channel belongs.
     * @type {string}
     */
    public guildId: string;

    /**
     * The ID of the last message sent in the thread, or null if not provided.
     * @type {string | null}
     */
    public lastMessageId: string | null;

    /**
     * The number of members in the thread.
     * @type {number}
     */
    public memberCount: number;

    /**
     * The number of messages sent in the thread.
     * @type {number}
     */
    public messageCount: number;

    /**
     * The name of the thread channel, or null if not provided.
     * @type {string | null}
     */
    public name: string | null;

    /**
     * The ID of the owner of the thread channel.
     * @type {string}
     */
    public ownerId: string;

    /**
     * The ID of the parent channel to which the thread belongs, or null if not provided.
     * @type {string | null}
     */
    public parentId: string | null;

    /**
     * The rate limit per user in the thread.
     * @type {number}
     */
    public rateLimitPerUser: number;

    /**
     * The metadata associated with the thread.
     * @type {ThreadMetaData}
     */
    public threadMetadata: ThreadMetaData;

    /**
     * The total number of messages sent in the thread.
     * @type {number}
     */
    public totalMessageSent: number;
    
    /**
     * Creates a new ThreadChannel instance.
     * @param {ApiThreadChannel} data - The data object containing thread channel information.
     */
    constructor(data: ApiThreadChannel) {
        super(data);
        this.guildId = data.guild_id;
        this.lastMessageId = data.last_message_id;
        this.memberCount = data.member_count;
        this.messageCount = data.message_count;
        this.name = data.name;
        this.ownerId = data.owner_id;
        this.parentId = data.parent_id;
        this.rateLimitPerUser = data.rate_limit_per_user;
        this.threadMetadata = new ThreadMetaData(data.thread_metadata);
        this.totalMessageSent = data.total_message_sent;        
    }
}

/**
 * Represents metadata associated with a thread.
 */
export class ThreadMetaData {
    
    /**
     * The timestamp at which the thread was archived.
     * @type {string}
     */
    public archiveTimestamp: string;

    /**
     * Indicates whether the thread is archived.
     * @type {boolean}
     */
    public archived: boolean;

    /**
     * The duration in minutes after which the thread will be automatically archived.
     * @type {number}
     */
    public autoArchiveDuration: number;

    /**
     * Indicates whether the thread is locked.
     * @type {boolean}
     */
    public locked: boolean;

    /**
     * Creates a new ThreadMetaData instance.
     * @param {ApiThreadMetadata} data - The data object containing thread metadata.
     */
    constructor(data: ApiThreadMetadata) {
        this.archiveTimestamp = data.archive_timestamp;
        this.archived = data.archived;
        this.autoArchiveDuration = data.auto_archive_duration;
        this.locked = data.locked;
    }
}