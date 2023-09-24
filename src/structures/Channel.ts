import { ApiChannel } from "../interfaces/ApiChannel";

/**
 * Represents a channel.
 */
export class Channel {
    
    /**
     * The unique ID of the channel.
     * @type {string}
     */
    public id: string;

    /**
     * The type of the channel.
     * @type {number}
     */
    public type: number;

    /**
     * Creates a new Channel instance.
     * @param {ApiChannel} data - The data object containing channel information.
     */
    constructor(data: ApiChannel) {
        this.id = data.id;
        this.type = data.type;
    }
}