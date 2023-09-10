"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GatewayIntents_1 = __importDefault(require("./GatewayIntents"));
class SolaceIntents {
}
/**
 * Intents that help with general discord bots.
 */
SolaceIntents.GENERAL = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.DIRECT_MESSAGES, GatewayIntents_1.default.GUILD_MEMBERS, GatewayIntents_1.default.GUILD_MESSAGES, GatewayIntents_1.default.GUILDS, GatewayIntents_1.default.MESSAGE_CONTENT);
/**
 * Intents that help with moderation discord bots.
 */
SolaceIntents.MODERATION = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_MEMBERS, GatewayIntents_1.default.GUILD_MESSAGE_REACTIONS, GatewayIntents_1.default.GUILD_MESSAGE_TYPING, GatewayIntents_1.default.GUILD_MESSAGES, GatewayIntents_1.default.GUILD_MODERATION, GatewayIntents_1.default.GUILDS, GatewayIntents_1.default.MESSAGE_CONTENT);
/**
 * Intents that help with music discord bots.
 */
SolaceIntents.MUSIC = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_MESSAGE_REACTIONS, GatewayIntents_1.default.GUILD_MESSAGE_TYPING, GatewayIntents_1.default.GUILD_MESSAGES, GatewayIntents_1.default.GUILD_VOICE_STATES, GatewayIntents_1.default.GUILDS, GatewayIntents_1.default.MESSAGE_CONTENT);
/**
 * Intents that help with invite tracker discord bots.
 */
SolaceIntents.INVITE_TRACKER = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_INVITES, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with emoji and sticker management discord bots.
 */
SolaceIntents.EMOJI_MANAGER = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_EMOJIS_AND_STICKERS, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with guild integration management discord bots.
 */
SolaceIntents.INTEGRATION_MANAGER = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_INTEGRATIONS, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with webhook management discord bots.
 */
SolaceIntents.WEBHOOK_MANAGER = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_WEBHOOKS, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with voice state monitor discord bots.
 */
SolaceIntents.VOICE_STATE_MONITOR = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_VOICE_STATES, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with guild presence monitor discord bots.
 */
SolaceIntents.PRESENCE_MONITOR = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_PRESENCES, GatewayIntents_1.default.GUILDS);
/**
 * Intents that help with direct message monitor discord bots.
 */
SolaceIntents.DIRECT_MESSAGE_MONITOR = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.DIRECT_MESSAGE_REACTIONS, GatewayIntents_1.default.DIRECT_MESSAGE_TYPING, GatewayIntents_1.default.DIRECT_MESSAGES);
/**
 * Intents that help with message content monitor discord bots.
 */
SolaceIntents.MESSAGE_CONTENT_MONITOR = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.GUILD_MESSAGES, GatewayIntents_1.default.MESSAGE_CONTENT);
/**
 * Intents that help with auto moderation discord bots.
 */
SolaceIntents.AUTO_MODERATION = GatewayIntents_1.default.combineIntents(GatewayIntents_1.default.AUTO_MODERATION_CONFIGURATION, GatewayIntents_1.default.AUTO_MODERATION_EXECUTION);
exports.default = SolaceIntents;
