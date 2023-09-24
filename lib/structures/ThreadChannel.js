"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadMetaData = exports.ThreadChannel = void 0;
const Channel_1 = require("./Channel");
/**
 * Represents a thread channel, which is a specialized type of channel.
 */
class ThreadChannel extends Channel_1.Channel {
    /**
     * Creates a new ThreadChannel instance.
     * @param {ApiThreadChannel} data - The data object containing thread channel information.
     */
    constructor(data) {
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
exports.ThreadChannel = ThreadChannel;
/**
 * Represents metadata associated with a thread.
 */
class ThreadMetaData {
    /**
     * Creates a new ThreadMetaData instance.
     * @param {ApiThreadMetadata} data - The data object containing thread metadata.
     */
    constructor(data) {
        this.archiveTimestamp = data.archive_timestamp;
        this.archived = data.archived;
        this.autoArchiveDuration = data.auto_archive_duration;
        this.locked = data.locked;
    }
}
exports.ThreadMetaData = ThreadMetaData;
