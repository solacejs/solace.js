"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolaceIntents = void 0;
const GatewayIntents_1 = require("./GatewayIntents");
/**
 * A utility class for defining intent combinations for different types of Discord bots.
 */
class SolaceIntents {
}
exports.SolaceIntents = SolaceIntents;
/**
 * Intents that help with general-purpose Discord bots.
 */
SolaceIntents.GENERAL = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.DIRECT_MESSAGES, GatewayIntents_1.GatewayIntents.GUILD_MEMBERS, GatewayIntents_1.GatewayIntents.GUILD_MESSAGES, GatewayIntents_1.GatewayIntents.GUILDS, GatewayIntents_1.GatewayIntents.MESSAGE_CONTENT);
/**
 * Intents that help with moderation Discord bots.
 */
SolaceIntents.MODERATION = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_MEMBERS, GatewayIntents_1.GatewayIntents.GUILD_MESSAGE_REACTIONS, GatewayIntents_1.GatewayIntents.GUILD_MESSAGE_TYPING, GatewayIntents_1.GatewayIntents.GUILD_MESSAGES, GatewayIntents_1.GatewayIntents.GUILD_MODERATION, GatewayIntents_1.GatewayIntents.GUILDS, GatewayIntents_1.GatewayIntents.MESSAGE_CONTENT);
/**
 * Intents that help with music Discord bots.
 */
SolaceIntents.MUSIC = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_MESSAGE_REACTIONS, GatewayIntents_1.GatewayIntents.GUILD_MESSAGE_TYPING, GatewayIntents_1.GatewayIntents.GUILD_MESSAGES, GatewayIntents_1.GatewayIntents.GUILD_VOICE_STATES, GatewayIntents_1.GatewayIntents.GUILDS, GatewayIntents_1.GatewayIntents.MESSAGE_CONTENT);
/**
 * Intents that help with invite tracker Discord bots.
 */
SolaceIntents.INVITE_TRACKER = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_INVITES, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with emoji and sticker management Discord bots.
 */
SolaceIntents.EMOJI_MANAGER = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_EMOJIS_AND_STICKERS, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with guild integration management Discord bots.
 */
SolaceIntents.INTEGRATION_MANAGER = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_INTEGRATIONS, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with webhook management Discord bots.
 */
SolaceIntents.WEBHOOK_MANAGER = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_WEBHOOKS, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with voice state monitor Discord bots.
 */
SolaceIntents.VOICE_STATE_MONITOR = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_VOICE_STATES, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with guild presence monitor Discord bots.
 */
SolaceIntents.PRESENCE_MONITOR = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_PRESENCES, GatewayIntents_1.GatewayIntents.GUILDS);
/**
 * Intents that help with direct message monitor Discord bots.
 */
SolaceIntents.DIRECT_MESSAGE_MONITOR = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.DIRECT_MESSAGE_REACTIONS, GatewayIntents_1.GatewayIntents.DIRECT_MESSAGE_TYPING, GatewayIntents_1.GatewayIntents.DIRECT_MESSAGES);
/**
 * Intents that help with message content monitor Discord bots.
 */
SolaceIntents.MESSAGE_CONTENT_MONITOR = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.GUILD_MESSAGES, GatewayIntents_1.GatewayIntents.MESSAGE_CONTENT);
/**
 * Intents that help with auto-moderation Discord bots.
 */
SolaceIntents.AUTO_MODERATION = GatewayIntents_1.GatewayIntents.combineIntents(GatewayIntents_1.GatewayIntents.AUTO_MODERATION_CONFIGURATION, GatewayIntents_1.GatewayIntents.AUTO_MODERATION_EXECUTION);
