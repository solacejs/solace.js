"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeChannel = exports.WelcomeScreen = void 0;
/**
 * Represents a welcome screen configuration for a guild.
 */
class WelcomeScreen {
    /**
     * Creates a new WelcomeScreen instance.
     * @param {ApiGuildWelcomeScreen} data - The data object containing welcome screen information.
     */
    constructor(data) {
        this.description = data.description;
        this.welcomeChannels = data.welcome_channels.map((welcomeChannel) => new WelcomeChannel(welcomeChannel));
    }
}
exports.WelcomeScreen = WelcomeScreen;
/**
 * Represents a welcome channel within a welcome screen configuration.
 */
class WelcomeChannel {
    /**
     * Creates a new WelcomeChannel instance.
     * @param {ApiGuildWelcomeScreenChannel} data - The data object containing welcome channel information.
     */
    constructor(data) {
        this.channelId = data.channel_id;
        this.description = data.description;
        this.emojiId = data.emoji_id;
        this.emojiName = data.emoji_name;
    }
}
exports.WelcomeChannel = WelcomeChannel;
