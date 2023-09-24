import { ApiGuildWelcomeScreen, ApiGuildWelcomeScreenChannel } from "../interfaces/ApiGuild";
/**
 * Represents a welcome screen configuration for a guild.
 */
export declare class WelcomeScreen {
    /**
     * The description of the welcome screen, or null if not provided.
     * @type {string | null}
     */
    description: string | null;
    /**
     * An array of welcome channels configured for the welcome screen.
     * @type {WelcomeChannel[]}
     */
    welcomeChannels: WelcomeChannel[];
    /**
     * Creates a new WelcomeScreen instance.
     * @param {ApiGuildWelcomeScreen} data - The data object containing welcome screen information.
     */
    constructor(data: ApiGuildWelcomeScreen);
}
/**
 * Represents a welcome channel within a welcome screen configuration.
 */
export declare class WelcomeChannel {
    /**
     * The ID of the channel associated with the welcome channel.
     * @type {string}
     */
    channelId: string;
    /**
     * The description of the welcome channel.
     * @type {string}
     */
    description: string;
    /**
     * The ID of the emoji associated with the welcome channel, or null if not provided.
     * @type {string | null}
     */
    emojiId: string | null;
    /**
     * The name of the emoji associated with the welcome channel, or null if not provided.
     * @type {string | null}
     */
    emojiName: string | null;
    /**
     * Creates a new WelcomeChannel instance.
     * @param {ApiGuildWelcomeScreenChannel} data - The data object containing welcome channel information.
     */
    constructor(data: ApiGuildWelcomeScreenChannel);
}
