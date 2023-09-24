import { ApiChannel } from "../interfaces/ApiChannel";
/**
 * Represents a channel.
 */
export declare class Channel {
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
