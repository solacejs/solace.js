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
/**
 * Represents a text channel within a guild (server).
 */
class GuildTextChannel extends GuildChannel_1.GuildChannel {
    /**
     * Constructs a new GuildTextChannel instance.
     * @param {Guild} guild - The Guild instance that this channel belongs to.
     * @param {any} data - Data containing information about the guild text channel.
     */
    constructor(guild, data) {
        super(guild, data);
        this.nsfw = !!data.nsfw;
        this.client = data.client;
    }
    /**
     * Sends a message to the guild text channel.
     * @param {string | MessageOptions} options - The message content or options.
     * @throws {Error} Throws an error if message creation fails.
     */
    send(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = {};
                if (typeof options == "object") {
                    body = {
                        embeds: options.embeds ? options.embeds.map((embed) => embed.toRaw()) : [],
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
