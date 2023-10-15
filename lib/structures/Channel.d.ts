import { Client } from "../client/Client";
import { ApiChannel } from "../interfaces/ApiChannel";
/**
 * Represents a channel.
 */
export declare class Channel {
    /**
     * The client instance.
     */
    client: Client;
    /**
     * The unique ID of the channel.
     * @type {string}
     */
    id: string;
    /**
     * The type of the channel.
     * @type {number}
     */
    type: number;
    /**
     * Creates a new Channel instance.
     * @param {ApiChannel} data - The data object containing channel information.
     */
    constructor(data: ApiChannel);
}
export declare enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_ANNOUNCEMENT = 5,
    ANNOUNCEMENT_THREAD = 10,
    PUBLIC_THREAD = 11,
    PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15,
    GUILD_MEDIA = 16
}
