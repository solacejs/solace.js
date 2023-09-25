"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildChannel = void 0;
const Channel_1 = require("./Channel");
class GuildChannel extends Channel_1.Channel {
    constructor(guild, data) {
        var _a;
        super(data);
        this.guild = guild;
        this.guildId = (_a = guild === null || guild === void 0 ? void 0 : guild.id) !== null && _a !== void 0 ? _a : data.guild_id;
    }
}
exports.GuildChannel = GuildChannel;
