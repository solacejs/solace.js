"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelType = exports.Channel = void 0;
/**
 * Represents a channel.
 */
class Channel {
    /**
     * Creates a new Channel instance.
     * @param {ApiChannel} data - The data object containing channel information.
     */
    constructor(data) {
        this.client = data.client;
        this.id = data.id;
        this.type = data.type;
    }
}
exports.Channel = Channel;
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["GUILD_TEXT"] = 0] = "GUILD_TEXT";
    ChannelType[ChannelType["DM"] = 1] = "DM";
    ChannelType[ChannelType["GUILD_VOICE"] = 2] = "GUILD_VOICE";
    ChannelType[ChannelType["GROUP_DM"] = 3] = "GROUP_DM";
    ChannelType[ChannelType["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
    ChannelType[ChannelType["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
    ChannelType[ChannelType["ANNOUNCEMENT_THREAD"] = 10] = "ANNOUNCEMENT_THREAD";
    ChannelType[ChannelType["PUBLIC_THREAD"] = 11] = "PUBLIC_THREAD";
    ChannelType[ChannelType["PRIVATE_THREAD"] = 12] = "PRIVATE_THREAD";
    ChannelType[ChannelType["GUILD_STAGE_VOICE"] = 13] = "GUILD_STAGE_VOICE";
    ChannelType[ChannelType["GUILD_DIRECTORY"] = 14] = "GUILD_DIRECTORY";
    ChannelType[ChannelType["GUILD_FORUM"] = 15] = "GUILD_FORUM";
    ChannelType[ChannelType["GUILD_MEDIA"] = 16] = "GUILD_MEDIA";
})(ChannelType || (exports.ChannelType = ChannelType = {}));
