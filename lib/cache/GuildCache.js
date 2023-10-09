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
exports.GuildCache = void 0;
const Constants_1 = require("../config/Constants");
const Guild_1 = require("../structures/Guild");
const SolaceError_1 = require("../util/SolaceError");
const CacheBase_1 = require("./CacheBase");
class GuildCache extends CacheBase_1.CacheBase {
    fetch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.has(id))
                return this.cache.get(id);
            const res = yield fetch(`${Constants_1.Constants.API}/guilds/${id}`, {
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    "Content-Type": "application/json"
                }
            });
            const data = yield res.json();
            if (data.errors) {
                if (data.errors.guild_id) {
                    throw new SolaceError_1.SolaceError(data.message, data.errors.guild_id._errors[0].message);
                }
            }
            const guild = new Guild_1.Guild(data);
            this.cache.set(guild.id, guild);
            return guild;
        });
    }
}
exports.GuildCache = GuildCache;
