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
        this.author = data.author ? new EmbedAuthor(data.author) : undefined;
        this.color = data.color;
        this.description = data.description;
        this.fields = data.fields ? data.fields.map((field) => new EmbedField(field)) : [];
        this.footer = data.footer ? new EmbedFooter(data.footer) : undefined;
        this.image = data.image ? new EmbedImage(data.image) : undefined;
        this.provider = data.provider ? new EmbedProvider(data.provider) : undefined;
        this.thumbnail = data.thumbnail ? new EmbedThumbnail(data.thumbnail) : undefined;
        this.timestamp = data.timestamp;
        this.title = data.title;
        this.type = data.type;
        this.url = data.url;
        this.video = data.video ? new EmbedVideo(data.video) : undefined;
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
        this.iconUrl = data.icon_url;
        this.proxyIconUrl = data.proxy_icon_url;
        this.text = data.text;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return {
            icon_url: this.iconUrl,
            proxy_icon_url: this.proxyIconUrl,
            text: this.text
        };
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
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        };
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
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        };
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
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        };
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
        this.name = data.name;
        this.url = data.url;
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
        this.iconUrl = data.icon_url;
        this.name = data.name;
        this.proxyIconUrl = data.proxy_icon_url;
        this.url = data.url;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return {
            icon_url: this.iconUrl,
            name: this.name,
            proxy_icon_url: this.proxyIconUrl,
            url: this.url
        };
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
