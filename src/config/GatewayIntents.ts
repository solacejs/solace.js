/**
 * A utility class for managing Discord Gateway Intents.
 */
export class GatewayIntents {

    /**
     * Represents the "GUILDS" intent, allowing access to guilds and guild-related data.
     */
    public static GUILDS = 1 << 0;

    /**
     * Represents the "GUILD_MEMBERS" intent, allowing access to member-related events and data within guilds.
     */
    public static GUILD_MEMBERS = 1 << 1;

    /**
     * Represents the "GUILD_MODERATION" intent, allowing access to moderation-related events and data within guilds.
     */
    public static GUILD_MODERATION = 1 << 2;

    /**
     * Represents the "GUILD_EMOJIS_AND_STICKERS" intent, allowing access to emoji and sticker-related events and data within guilds.
     */
    public static GUILD_EMOJIS_AND_STICKERS = 1 << 3;

    /**
     * Represents the "GUILD_INTEGRATIONS" intent, allowing access to integration-related events and data within guilds.
     */
    public static GUILD_INTEGRATIONS = 1 << 4;

    /**
     * Represents the "GUILD_WEBHOOKS" intent, allowing access to webhook-related events and data within guilds.
     */
    public static GUILD_WEBHOOKS = 1 << 5;

    /**
     * Represents the "GUILD_INVITES" intent, allowing access to invite-related events and data within guilds.
     */
    public static GUILD_INVITES = 1 << 6;

    /**
     * Represents the "GUILD_VOICE_STATES" intent, allowing access to voice state-related events and data within guilds.
     */
    public static GUILD_VOICE_STATES = 1 << 7;

    /**
     * Represents the "GUILD_PRESENCES" intent, allowing access to presence-related events and data within guilds.
     */
    public static GUILD_PRESENCES = 1 << 8;

    /**
     * Represents the "GUILD_MESSAGES" intent, allowing access to message-related events and data within guilds.
     */
    public static GUILD_MESSAGES = 1 << 9;

    /**
     * Represents the "GUILD_MESSAGE_REACTIONS" intent, allowing access to message reaction-related events and data within guilds.
     */
    public static GUILD_MESSAGE_REACTIONS = 1 << 10;

    /**
     * Represents the "GUILD_MESSAGE_TYPING" intent, allowing access to message typing-related events within guilds.
     */
    public static GUILD_MESSAGE_TYPING = 1 << 11;

    /**
     * Represents the "DIRECT_MESSAGES" intent, allowing access to direct message-related events and data.
     */
    public static DIRECT_MESSAGES = 1 << 12;

    /**
     * Represents the "DIRECT_MESSAGE_REACTIONS" intent, allowing access to direct message reaction-related events and data.
     */
    public static DIRECT_MESSAGE_REACTIONS = 1 << 13;

    /**
     * Represents the "DIRECT_MESSAGE_TYPING" intent, allowing access to direct message typing-related events.
     */
    public static DIRECT_MESSAGE_TYPING = 1 << 14;

    /**
     * Represents the "MESSAGE_CONTENT" intent, allowing access to message content and partial message events.
     */
    public static MESSAGE_CONTENT = 1 << 15;

    /**
     * Represents the "GUILD_SCHEDULED_EVENTS" intent, allowing access to scheduled event-related events and data within guilds.
     */
    public static GUILD_SCHEDULED_EVENTS = 1 << 16;

    /**
     * Represents the "AUTO_MODERATION_CONFIGURATION" intent, allowing access to auto-moderation configuration-related events and data.
     */
    public static AUTO_MODERATION_CONFIGURATION = 1 << 20;

    /**
     * Represents the "AUTO_MODERATION_EXECUTION" intent, allowing access to auto-moderation execution-related events and data.
     */
    public static AUTO_MODERATION_EXECUTION = 1 << 21;

    /**
     * Combines multiple Gateway Intents into a single numeric value.
     * @param {...number} intents - The Gateway Intents to combine.
     * @returns {number} - The combined Gateway Intents as a numeric value.
     */
    public static combineIntents(...intents: number[]): number {
        return intents.reduce((acc, intent) => acc | intent, 0);
    }
}
