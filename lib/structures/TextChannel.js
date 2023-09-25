"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextChannel = void 0;
const Channel_1 = require("./Channel");
class TextChannel extends Channel_1.Channel {
    constructor(data) {
        super(data);
        this.lastMessageId = data.last_message_id;
        this.flags = data.flags;
    }
}
exports.TextChannel = TextChannel;
