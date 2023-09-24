import { ApiThreadChannel, ApiThreadMetadata } from "../interfaces/ApiThreadChannel";
import { Channel } from "./Channel";
/**
 * Represents a thread channel, which is a specialized type of channel.
 */
export declare class ThreadChannel extends Channel {
    /**
     * The ID of the guild to which the thread channel belongs.
     * @type {string}
     */
    guildId: string;
    /**
     * The ID of the last message sent in the thread, or null if not provided.
     * @type {string | null}
     */
    lastMessageId: string | null;
    /**
     * The number of members in the thread.
     * @type {number}
     */
    memberCount: number;
    /**
     * The number of messages sent in the thread.
     * @type {number}
     */
    messageCount: number;
    /**
     * The name of the thread channel, or null if not provided.
     * @type {string | null}
     */
    name: string | null;
    /**
     * The ID of the owner of the thread channel.
     * @type {string}
     */
    ownerId: string;
    /**
     * The ID of the parent channel to which the thread belongs, or null if not provided.
     * @type {string | null}
     */
    parentId: string | null;
    /**
     * The rate limit per user in the thread.
     * @type {number}
     */
    rateLimitPerUser: number;
    /**
     * The metadata associated with the thread.
     * @type {ThreadMetaData}
     */
    threadMetadata: ThreadMetaData;
    /**
     * The total number of messages sent in the thread.
     * @type {number}
     */
    totalMessageSent: number;
    /**
     * Creates a new ThreadChannel instance.
     * @param {ApiThreadChannel} data - The data object containing thread channel information.
     */
    constructor(data: ApiThreadChannel);
}
/**
 * Represents metadata associated with a thread.
 */
export declare class ThreadMetaData {
    /**
     * The timestamp at which the thread was archived.
     * @type {string}
     */
    archiveTimestamp: string;
    /**
     * Indicates whether the thread is archived.
     * @type {boolean}
     */
    archived: boolean;
    /**
     * The duration in minutes after which the thread will be automatically archived.
     * @type {number}
     */
    autoArchiveDuration: number;
    /**
     * Indicates whether the thread is locked.
     * @type {boolean}
     */
    locked: boolean;
    /**
     * Creates a new ThreadMetaData instance.
     * @param {ApiThreadMetadata} data - The data object containing thread metadata.
     */
    constructor(data: ApiThreadMetadata);
}
