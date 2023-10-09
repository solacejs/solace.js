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
const GuildTextChannel_1 = require("../structures/GuildTextChannel");
const CacheBase_1 = require("./CacheBase");
class ChannelCache extends CacheBase_1.CacheBase {
    fetch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.has(id))
                return this.cache.get(id);
            const res = yield fetch(`${Constants_1.Constants.API}/channels/${id}`, {
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    "Content-Type": "application/json"
                }
            });
            const data = yield res.json();
            switch (data.type) {
                case Channel_1.ChannelType.GUILD_TEXT:
                    const channel = new GuildTextChannel_1.GuildTextChannel(yield this.client.guilds.fetch(data.guild_id), data);
                    this.cache.set(channel.id, channel);
                    return channel;
            }
        });
    }
}
exports.ChannelCache = ChannelCache;
