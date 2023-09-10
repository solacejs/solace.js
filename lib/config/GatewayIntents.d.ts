export default class GatewayIntents {
    static GUILDS: number;
    static GUILD_MEMBERS: number;
    static GUILD_MODERATION: number;
    static GUILD_EMOJIS_AND_STICKERS: number;
    static GUILD_INTEGRATIONS: number;
    static GUILD_WEBHOOKS: number;
    static GUILD_INVITES: number;
    static GUILD_VOICE_STATES: number;
    static GUILD_PRESENCES: number;
    static GUILD_MESSAGES: number;
    static GUILD_MESSAGE_REACTIONS: number;
    static GUILD_MESSAGE_TYPING: number;
    static DIRECT_MESSAGES: number;
    static DIRECT_MESSAGE_REACTIONS: number;
    static DIRECT_MESSAGE_TYPING: number;
    static MESSAGE_CONTENT: number;
    static GUILD_SCHEDULED_EVENTS: number;
    static AUTO_MODERATION_CONFIGURATION: number;
    static AUTO_MODERATION_EXECUTION: number;
    static combineIntents(...intents: number[]): number;
}
