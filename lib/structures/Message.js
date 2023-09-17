"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
/**
 * Represents a message on discord
 */
class Message {
    /**
     * Constructs a new Message instance.
     * @param {IMessage} data - The message data.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        this.activity = (_a = data.activity) !== null && _a !== void 0 ? _a : null;
        this.application = (_b = data.application) !== null && _b !== void 0 ? _b : null;
        this.applicationId = (_c = data.application_id) !== null && _c !== void 0 ? _c : null;
        this.attachments = data.attachments;
        this.author = new User_1.default(data.author);
        this.channelId = (_d = data.channel_id) !== null && _d !== void 0 ? _d : null;
        this.components = (_e = data.components) !== null && _e !== void 0 ? _e : null;
        this.content = data.content;
        this.editedTimestamp = data.edited_timestamp;
        this.embeds = data.embeds;
        this.flags = (_f = data.flags) !== null && _f !== void 0 ? _f : null;
        this.id = data.id;
        this.interaction = (_g = data.interaction) !== null && _g !== void 0 ? _g : null;
        this.mentionEveryone = data.mention_everyone;
        this.mentionChannels = (_h = data.mention_channels) !== null && _h !== void 0 ? _h : null;
        this.mentionRoles = data.mention_roles;
        this.mentions = data.mentions.map((mention) => new User_1.default(mention));
        this.messageReference = (_j = data.message_reference) !== null && _j !== void 0 ? _j : null;
        this.nonce = (_k = data.nonce) !== null && _k !== void 0 ? _k : null;
        this.pinned = data.pinned;
        this.position = (_l = data.position) !== null && _l !== void 0 ? _l : null;
        this.reactions = (_m = data.reactions) !== null && _m !== void 0 ? _m : null;
        this.referencedMessage = (_o = data.referenced_message) !== null && _o !== void 0 ? _o : null;
        this.roleSubscriptionData = (_p = data.role_subscription_data) !== null && _p !== void 0 ? _p : null;
        this.stickerItems = (_q = data.sticker_items) !== null && _q !== void 0 ? _q : null;
        this.stickers = (_r = data.stickers) !== null && _r !== void 0 ? _r : null;
        this.thread = (_s = data.thread) !== null && _s !== void 0 ? _s : null;
        this.timestamp = data.timestamp;
        this.tts = data.tts;
        this.type = data.type;
        this.webhookId = (_t = data.webhook_id) !== null && _t !== void 0 ? _t : null;
    }
}
exports.default = Message;
