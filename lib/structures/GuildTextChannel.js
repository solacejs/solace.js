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
exports.GuildTextChannel = void 0;
const Constants_1 = require("../config/Constants");
const GuildChannel_1 = require("./GuildChannel");
class GuildTextChannel extends GuildChannel_1.GuildChannel {
    constructor(guild, data) {
        super(guild, data);
        this.nsfw = !!data.nsfw;
        this.client = data.client;
    }
    send(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = {};
                if (typeof options == "object") {
                    body = {
                        embeds: (_a = options.embeds) === null || _a === void 0 ? void 0 : _a.map((embed) => embed.toRaw()),
                        content: options.content
                    };
                }
                else
                    body = { content: options };
                yield fetch(`${Constants_1.Constants.API}/channels/${this.id}/messages`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bot ${this.client.options.token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(Object.assign({}, body))
                });
            }
            catch (err) {
                throw new Error(`Failed to create message: ${err}`);
            }
        });
    }
}
exports.GuildTextChannel = GuildTextChannel;
