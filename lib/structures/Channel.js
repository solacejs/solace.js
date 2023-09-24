"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
/**
 * Represents a channel.
 */
class Channel {
    /**
     * Creates a new Channel instance.
     * @param {ApiChannel} data - The data object containing channel information.
     */
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
    }
}
exports.Channel = Channel;
