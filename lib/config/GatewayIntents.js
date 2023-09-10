"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GatewayIntents {
    static combineIntents(...intents) {
        return intents.reduce((acc, intent) => acc | intent, 0);
    }
}
GatewayIntents.GUILDS = 1 << 0;
GatewayIntents.GUILD_MEMBERS = 1 << 1;
GatewayIntents.GUILD_MODERATION = 1 << 2;
GatewayIntents.GUILD_EMOJIS_AND_STICKERS = 1 << 3;
GatewayIntents.GUILD_INTEGRATIONS = 1 << 4;
GatewayIntents.GUILD_WEBHOOKS = 1 << 5;
GatewayIntents.GUILD_INVITES = 1 << 6;
GatewayIntents.GUILD_VOICE_STATES = 1 << 7;
GatewayIntents.GUILD_PRESENCES = 1 << 8;
GatewayIntents.GUILD_MESSAGES = 1 << 9;
GatewayIntents.GUILD_MESSAGE_REACTIONS = 1 << 10;
GatewayIntents.GUILD_MESSAGE_TYPING = 1 << 11;
GatewayIntents.DIRECT_MESSAGES = 1 << 12;
GatewayIntents.DIRECT_MESSAGE_REACTIONS = 1 << 13;
GatewayIntents.DIRECT_MESSAGE_TYPING = 1 << 14;
GatewayIntents.MESSAGE_CONTENT = 1 << 15;
GatewayIntents.GUILD_SCHEDULED_EVENTS = 1 << 16;
GatewayIntents.AUTO_MODERATION_CONFIGURATION = 1 << 20;
GatewayIntents.AUTO_MODERATION_EXECUTION = 1 << 21;
exports.default = GatewayIntents;
