"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmChannel = void 0;
const Channel_1 = require("./Channel");
const RecipientEntity_1 = require("./RecipientEntity");
class DmChannel extends Channel_1.Channel {
    constructor(data) {
        super(data);
        this.lastMessageId = data.last_message_id;
        this.recipients = data.recipients ? data.recipients.map((recipient) => new RecipientEntity_1.RecipientEntity(recipient)) : [];
    }
}
exports.DmChannel = DmChannel;
