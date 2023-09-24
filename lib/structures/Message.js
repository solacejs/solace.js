"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activity_1 = __importDefault(require("./Activity"));
const Application_1 = __importDefault(require("./Application"));
const Attachment_1 = __importDefault(require("./Attachment"));
const Embed_1 = __importDefault(require("./Embed"));
const Interaction_1 = __importDefault(require("./Interaction"));
const Reaction_1 = __importStar(require("./Reaction"));
const Sticker_1 = __importStar(require("./Sticker"));
const ThreadChannel_1 = __importDefault(require("./ThreadChannel"));
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.activity = data.activity ? new Activity_1.default(data.activity) : null;
        this.application = data.application ? new Application_1.default(data.application) : null;
        this.applicationId = (_a = data.application_id) !== null && _a !== void 0 ? _a : null;
        this.attachments = data.attachments.map((attachment) => new Attachment_1.default(attachment));
        this.author = new User_1.default(data.author);
        this.channelId = (_b = data.channel_id) !== null && _b !== void 0 ? _b : null;
        this.components = (_c = data.components) !== null && _c !== void 0 ? _c : null;
        this.content = data.content;
        this.editedTimestamp = data.edited_timestamp;
        this.embeds = data.embeds ? data.embeds.map((embed) => new Embed_1.default(embed)) : [];
        this.flags = (_d = data.flags) !== null && _d !== void 0 ? _d : null;
        this.id = data.id;
        this.interaction = data.interaction ? new Interaction_1.default(data.interaction) : null;
        this.mentionEveryone = data.mention_everyone;
        this.mentionChannels = (_e = data.mention_channels) !== null && _e !== void 0 ? _e : null;
        this.mentionRoles = data.mention_roles;
        this.mentions = data.mentions.map((mention) => new User_1.default(mention));
        this.messageReference = (_f = data.message_reference) !== null && _f !== void 0 ? _f : null;
        this.nonce = (_g = data.nonce) !== null && _g !== void 0 ? _g : null;
        this.pinned = data.pinned;
        this.position = (_h = data.position) !== null && _h !== void 0 ? _h : null;
        this.reactions = data.reactions ? data.reactions.map((reaction) => new Reaction_1.default(reaction)) : [];
        this.referencedMessage = (_j = data.referenced_message) !== null && _j !== void 0 ? _j : null;
        this.roleSubscriptionData = data.role_subscription_data ? new Reaction_1.RoleSubscriptionData(data.role_subscription_data) : null;
        this.stickerItems = data.sticker_items ? data.sticker_items.map((stickerItem) => new Sticker_1.StickerItem(stickerItem)) : [];
        this.stickers = data.stickers ? data.stickers.map((sticker) => new Sticker_1.default(sticker)) : [];
        this.thread = data.thread ? new ThreadChannel_1.default(data.thread) : null;
        this.timestamp = data.timestamp;
        this.tts = data.tts;
        this.type = data.type;
        this.webhookId = (_k = data.webhook_id) !== null && _k !== void 0 ? _k : null;
    }
}
exports.default = Message;
