"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedField = exports.EmbedAuthor = exports.EmbedProvider = exports.EmbedVideo = exports.EmbedThumbnail = exports.EmbedImage = exports.EmbedFooter = exports.Embed = void 0;
/**
 * Represents an embed
 */
class Embed {
    /**
     * Creates a new Embed instance.
     * @param {ApiEmbed} data - The data object containing embed information.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.author = data.author ? new EmbedAuthor(data.author) : null;
        this.color = (_a = data.color) !== null && _a !== void 0 ? _a : null;
        this.description = (_b = data.description) !== null && _b !== void 0 ? _b : null;
        this.fields = data.fields.map((field) => new EmbedField(field));
        this.footer = data.footer ? new EmbedFooter(data.footer) : null;
        this.image = data.image ? new EmbedImage(data.image) : null;
        this.provider = data.provider ? new EmbedProvider(data.provider) : null;
        this.thumbnail = data.thumbnail ? new EmbedThumbnail(data.thumbnail) : null;
        this.timestamp = (_c = data.timestamp) !== null && _c !== void 0 ? _c : null;
        this.title = (_d = data.title) !== null && _d !== void 0 ? _d : null;
        this.type = (_e = data.type) !== null && _e !== void 0 ? _e : null;
        this.url = (_f = data.url) !== null && _f !== void 0 ? _f : null;
        this.video = data.video ? new EmbedVideo(data.video) : null;
    }
}
exports.Embed = Embed;
/**
 * Represents the footer of an embed.
 */
class EmbedFooter {
    /**
     * Creates a new EmbedFooter instance.
     * @param {ApiEmbedFooter} data - The data object containing footer information.
     */
    constructor(data) {
        var _a, _b;
        this.iconUrl = (_a = data.icon_url) !== null && _a !== void 0 ? _a : null;
        this.proxyIconUrl = (_b = data.proxy_icon_url) !== null && _b !== void 0 ? _b : null;
        this.text = data.text;
    }
}
exports.EmbedFooter = EmbedFooter;
/**
 * Represents an image within an embed.
 */
class EmbedImage {
    /**
     * Creates a new EmbedImage instance.
     * @param {ApiEmbedImage} data - The data object containing image information.
     */
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedImage = EmbedImage;
/**
 * Represents a thumbnail image within an embedded message.
 */
class EmbedThumbnail {
    /**
     * Creates a new EmbedThumbnail instance.
     * @param {ApiEmbedThumbnail} data - The data object containing thumbnail information.
     */
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedThumbnail = EmbedThumbnail;
/**
 * Represents a video within an embedded message.
 */
class EmbedVideo {
    /**
     * Creates a new EmbedVideo instance.
     * @param {ApiEmbedVideo} data - The data object containing video information.
     */
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedVideo = EmbedVideo;
/**
 * Represents a provider of the embed.
 */
class EmbedProvider {
    /**
     * Creates a new EmbedProvider instance.
     * @param {ApiEmbedProvider} data - The data object containing provider information.
     */
    constructor(data) {
        var _a, _b;
        this.name = (_a = data.name) !== null && _a !== void 0 ? _a : null;
        this.url = (_b = data.url) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedProvider = EmbedProvider;
/**
 * Represents the author of an embed.
 */
class EmbedAuthor {
    /**
     * Creates a new EmbedAuthor instance.
     * @param {ApiEmbedAuthor} data - The data object containing author information.
     */
    constructor(data) {
        var _a, _b, _c;
        this.iconUrl = (_a = data.icon_url) !== null && _a !== void 0 ? _a : null;
        this.name = data.name;
        this.proxyIconUrl = (_b = data.proxy_icon_url) !== null && _b !== void 0 ? _b : null;
        this.url = (_c = data.url) !== null && _c !== void 0 ? _c : null;
    }
}
exports.EmbedAuthor = EmbedAuthor;
/**
 * Represents a field within an embed.
 */
class EmbedField {
    /**
     * Creates a new EmbedField instance.
     * @param {ApiEmbedField} data - The data object containing field information.
     */
    constructor(data) {
        this.inline = !!data.inline;
        this.name = data.name;
        this.value = data.value;
    }
}
exports.EmbedField = EmbedField;
