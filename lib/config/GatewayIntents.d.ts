/**
 * A utility class for managing Discord Gateway Intents.
 */
export declare class GatewayIntents {
    /**
     * Represents the "GUILDS" intent, allowing access to guilds and guild-related data.
     */
    static GUILDS: number;
    /**
     * Represents the "GUILD_MEMBERS" intent, allowing access to member-related events and data within guilds.
     */
    static GUILD_MEMBERS: number;
    /**
     * Represents the "GUILD_MODERATION" intent, allowing access to moderation-related events and data within guilds.
     */
    static GUILD_MODERATION: number;
    /**
     * Represents the "GUILD_EMOJIS_AND_STICKERS" intent, allowing access to emoji and sticker-related events and data within guilds.
     */
    static GUILD_EMOJIS_AND_STICKERS: number;
    /**
     * Represents the "GUILD_INTEGRATIONS" intent, allowing access to integration-related events and data within guilds.
     */
    static GUILD_INTEGRATIONS: number;
    /**
     * Represents the "GUILD_WEBHOOKS" intent, allowing access to webhook-related events and data within guilds.
     */
    static GUILD_WEBHOOKS: number;
    /**
     * Represents the "GUILD_INVITES" intent, allowing access to invite-related events and data within guilds.
     */
    static GUILD_INVITES: number;
    /**
     * Represents the "GUILD_VOICE_STATES" intent, allowing access to voice state-related events and data within guilds.
     */
    static GUILD_VOICE_STATES: number;
    /**
     * Represents the "GUILD_PRESENCES" intent, allowing access to presence-related events and data within guilds.
     */
    static GUILD_PRESENCES: number;
    /**
     * Represents the "GUILD_MESSAGES" intent, allowing access to message-related events and data within guilds.
     */
    static GUILD_MESSAGES: number;
    /**
     * Represents the "GUILD_MESSAGE_REACTIONS" intent, allowing access to message reaction-related events and data within guilds.
     */
    static GUILD_MESSAGE_REACTIONS: number;
    /**
     * Represents the "GUILD_MESSAGE_TYPING" intent, allowing access to message typing-related events within guilds.
     */
    static GUILD_MESSAGE_TYPING: number;
    /**
     * Represents the "DIRECT_MESSAGES" intent, allowing access to direct message-related events and data.
     */
    static DIRECT_MESSAGES: number;
    /**
     * Represents the "DIRECT_MESSAGE_REACTIONS" intent, allowing access to direct message reaction-related events and data.
     */
    static DIRECT_MESSAGE_REACTIONS: number;
    /**
     * Represents the "DIRECT_MESSAGE_TYPING" intent, allowing access to direct message typing-related events.
     */
    static DIRECT_MESSAGE_TYPING: number;
    /**
     * Represents the "MESSAGE_CONTENT" intent, allowing access to message content and partial message events.
     */
    static MESSAGE_CONTENT: number;
    /**
     * Represents the "GUILD_SCHEDULED_EVENTS" intent, allowing access to scheduled event-related events and data within guilds.
     */
    static GUILD_SCHEDULED_EVENTS: number;
    /**
     * Represents the "AUTO_MODERATION_CONFIGURATION" intent, allowing access to auto-moderation configuration-related events and data.
     */
    static AUTO_MODERATION_CONFIGURATION: number;
    /**
     * Represents the "AUTO_MODERATION_EXECUTION" intent, allowing access to auto-moderation execution-related events and data.
     */
    static AUTO_MODERATION_EXECUTION: number;
    /**
     * Combines multiple Gateway Intents into a single numeric value.
     * @param {...number} intents - The Gateway Intents to combine.
     * @returns {number} - The combined Gateway Intents as a numeric value.
     */
    static combineIntents(...intents: number[]): number;
}
