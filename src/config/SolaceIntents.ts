import GatewayIntents from "./GatewayIntents";

export default class SolaceIntents {

    /**
     * Intents that help with general discord bots.
     */
    public static GENERAL = GatewayIntents.combineIntents(
        GatewayIntents.DIRECT_MESSAGES,
        GatewayIntents.GUILD_MEMBERS,
        GatewayIntents.GUILD_MESSAGES,
        GatewayIntents.GUILDS,
        GatewayIntents.MESSAGE_CONTENT,
    )

    /**
     * Intents that help with moderation discord bots.
     */
    public static MODERATION = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_MEMBERS,
        GatewayIntents.GUILD_MESSAGE_REACTIONS,
        GatewayIntents.GUILD_MESSAGE_TYPING,
        GatewayIntents.GUILD_MESSAGES,
        GatewayIntents.GUILD_MODERATION,
        GatewayIntents.GUILDS,
        GatewayIntents.MESSAGE_CONTENT,
    );

    /**
     * Intents that help with music discord bots.
     */
    public static MUSIC = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_MESSAGE_REACTIONS,
        GatewayIntents.GUILD_MESSAGE_TYPING,
        GatewayIntents.GUILD_MESSAGES,
        GatewayIntents.GUILD_VOICE_STATES,
        GatewayIntents.GUILDS,
        GatewayIntents.MESSAGE_CONTENT,
    );

    /**
     * Intents that help with invite tracker discord bots.
     */
    public static INVITE_TRACKER = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_INVITES,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with emoji and sticker management discord bots.
     */
    public static EMOJI_MANAGER = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_EMOJIS_AND_STICKERS,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with guild integration management discord bots.
     */
    public static INTEGRATION_MANAGER = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_INTEGRATIONS,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with webhook management discord bots.
     */
    public static WEBHOOK_MANAGER = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_WEBHOOKS,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with voice state monitor discord bots.
     */
    public static VOICE_STATE_MONITOR = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_VOICE_STATES,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with guild presence monitor discord bots.
     */
    public static PRESENCE_MONITOR = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_PRESENCES,
        GatewayIntents.GUILDS,
    );

    /**
     * Intents that help with direct message monitor discord bots.
     */
    public static DIRECT_MESSAGE_MONITOR = GatewayIntents.combineIntents(
        GatewayIntents.DIRECT_MESSAGE_REACTIONS,
        GatewayIntents.DIRECT_MESSAGE_TYPING,
        GatewayIntents.DIRECT_MESSAGES,
    );

    /**
     * Intents that help with message content monitor discord bots.
     */
    public static MESSAGE_CONTENT_MONITOR = GatewayIntents.combineIntents(
        GatewayIntents.GUILD_MESSAGES,
        GatewayIntents.MESSAGE_CONTENT,
    );

    /**
     * Intents that help with auto moderation discord bots.
     */
    public static AUTO_MODERATION = GatewayIntents.combineIntents(
        GatewayIntents.AUTO_MODERATION_CONFIGURATION,
        GatewayIntents.AUTO_MODERATION_EXECUTION
    );
}