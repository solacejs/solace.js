"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
/**
 * A utility class for building and customizing Embed objects.
 */
class EmbedBuilder {
    /**
     * Constructs a new EmbedBuilder instance.
     * @param {Embed} data - An existing Embed object to start with (optional).
     */
    constructor(data) {
        this.data = data || {
            author: undefined,
            color: undefined,
            description: undefined,
            fields: [],
            footer: undefined,
            image: undefined,
            provider: undefined,
            thumbnail: undefined,
            timestamp: undefined,
            title: undefined,
            type: undefined,
            url: undefined,
            video: undefined
        };
    }
    /**
     * Sets the author information for the Embed.
     * @param {EmbedAuthor} author - The author information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setAuthor(author) {
        this.data.author = author;
        return this;
    }
    /**
     * Sets the color of the Embed.
     * @param {number} color - The color value as a number.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setColor(color) {
        this.data.color = color;
        return this;
    }
    /**
     * Sets the description of the Embed.
     * @param {string} description - The description text.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setDescription(description) {
        this.data.description = description;
        return this;
    }
    /**
     * Adds an array of EmbedFields to the Embed.
     * @param {EmbedField[]} fields - An array of EmbedFields to add.
     * @returns The EmbedBuilder instance for method chaining.
     */
    addFields(fields) {
        for (const field of fields)
            this.data.fields.push(field);
        return this;
    }
    /**
     * Sets the array of EmbedFields for the Embed.
     * @param {EmbedField[]} fields - An array of EmbedFields to set.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setFields(fields) {
        this.data.fields = fields;
        return this;
    }
    /**
     * Removes a specified number of EmbedFields starting from a given index.
     * @param {number} index - The starting index to remove fields.
     * @param {number} count - The number of fields to remove.
     * @returns - The EmbedBuilder instance for method chaining.
     */
    spliceFields(index, count) {
        this.data.fields.splice(index, count);
        return this;
    }
    /**
     * Sets the footer information for the Embed.
     * @param {EmbedFooter} footer - The footer information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setFooter(footer) {
        this.data.footer = footer;
        return this;
    }
    /**
     * Sets the image information for the Embed.
     * @param {EmbedImage} image - The image information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setImage(image) {
        this.data.image = image;
        return this;
    }
    /**
     * Sets the provider information for the Embed.
     * @param {EmbedProvider} provider - The provider information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setProvider(provider) {
        this.data.provider = provider;
        return this;
    }
    /**
     * Sets the thumbnail information for the Embed.
     * @param {EmbedThumbnail} thumbnail - The thumbnail information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setThumbnail(thumbnail) {
        this.data.thumbnail = thumbnail;
        return this;
    }
    /**
     * Sets the timestamp for the Embed.
     * @param {string} timestamp - The timestamp string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setTimestamp(timestamp) {
        this.data.timestamp = timestamp;
        return this;
    }
    /**
     * Sets the title for the Embed.
     * @param {string} title - The title text.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    /**
     * Sets the type of the Embed.
     * @param {string} type - The type string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setType(type) {
        this.data.type = type;
        return this;
    }
    /**
     * Sets the URL for the Embed.
     * @param {string} url - The URL string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setUrl(url) {
        this.data.url = url;
        return this;
    }
    /**
     * Sets the video information for the Embed.
     * @param {EmbedVideo} video - The video information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setVideo(video) {
        this.data.video = video;
        return this;
    }
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw() {
        return Object.assign(Object.assign({}, this.data), { author: this.data.author ? this.data.author.toRaw() : undefined, footer: this.data.footer ? this.data.footer.toRaw() : undefined, image: this.data.image ? this.data.image.toRaw() : undefined, thumbnail: this.data.thumbnail ? this.data.thumbnail.toRaw() : undefined, video: this.data.video ? this.data.video.toRaw() : undefined });
    }
}
exports.EmbedBuilder = EmbedBuilder;
