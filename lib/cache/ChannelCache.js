"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelCache = void 0;
const Constants_1 = require("../config/Constants");
const Channel_1 = require("../structures/Channel");
const DmChannel_1 = require("../structures/DmChannel");
const GuildTextChannel_1 = require("../structures/GuildTextChannel");
const Collection_1 = require("../util/Collection");
/**
 * Cache manager for channels
 */
class ChannelCache {
    constructor(client) {
        this.client = client;
        let maxSize = 256;
        if (client.options.cache)
            maxSize = client.options.cache.channels ? client.options.cache.channels : maxSize;
        this.cache = new Collection_1.Collection(maxSize);
    }
    /**
     * Fetches a channel from discord or grabs a channel from cache if it exists.
     * @param id - Channel ID
     * @returns A channel or null
     */
    fetch(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.has(id))
                return (_a = this.cache.get(id)) !== null && _a !== void 0 ? _a : null;
            const res = yield fetch(`${Constants_1.Constants.API}/channels/${id}`, {
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    "Content-Type": "application/json"
                }
            });
            const data = yield res.json();
            switch (data.type) {
                case Channel_1.ChannelType.DM:
                    const channel = new DmChannel_1.DmChannel(data);
                    channel.client = this.client;
                    this.cache.set(channel.id, channel);
                    return channel;
                case Channel_1.ChannelType.GUILD_TEXT:
                    const guild = yield this.client.guilds.fetch(data.guild_id);
                    if (guild) {
                        const channel = new GuildTextChannel_1.GuildTextChannel(guild, data);
                        channel.client = this.client;
                        this.cache.set(channel.id, channel);
                        return channel;
                    }
                    else
                        return null;
                default:
                    return null;
            }
        });
    }
}
exports.ChannelCache = ChannelCache;
