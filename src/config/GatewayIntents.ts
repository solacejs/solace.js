export default class GatewayIntents {
    public static GUILDS = 1 << 0;
    public static GUILD_MEMBERS = 1 << 1;
    public static GUILD_MODERATION = 1 << 2;
    public static GUILD_EMOJIS_AND_STICKERS = 1 << 3;
    public static GUILD_INTEGRATIONS = 1 << 4;
    public static GUILD_WEBHOOKS = 1 << 5;
    public static GUILD_INVITES = 1 << 6;
    public static GUILD_VOICE_STATES = 1 << 7;
    public static GUILD_PRESENCES = 1 << 8;
    public static GUILD_MESSAGES = 1 << 9;
    public static GUILD_MESSAGE_REACTIONS = 1 << 10;
    public static GUILD_MESSAGE_TYPING = 1 << 11;
    public static DIRECT_MESSAGES = 1 << 12;
    public static DIRECT_MESSAGE_REACTIONS = 1 << 13;
    public static DIRECT_MESSAGE_TYPING = 1 << 14;
    public static MESSAGE_CONTENT = 1 << 15;
    public static GUILD_SCHEDULED_EVENTS = 1 << 16;
    public static AUTO_MODERATION_CONFIGURATION = 1 << 20;
    public static AUTO_MODERATION_EXECUTION = 1 << 21;

    public static combineIntents(...intents: number[]): number {
        return intents.reduce((acc, intent) => acc | intent, 0);
    }
}