import { Embed, EmbedAuthor, EmbedField, EmbedFooter, EmbedImage, EmbedProvider, EmbedThumbnail, EmbedVideo } from "../structures/Embed";
/**
 * A utility class for building and customizing Embed objects.
 */
export declare class EmbedBuilder {
    private data;
    /**
     * Constructs a new EmbedBuilder instance.
     * @param {Embed} data - An existing Embed object to start with (optional).
     */
    constructor(data?: Embed);
    /**
     * Sets the author information for the Embed.
     * @param {EmbedAuthor} author - The author information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setAuthor(author: EmbedAuthor): this;
    /**
     * Sets the color of the Embed.
     * @param {number} color - The color value as a number.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setColor(color: number): this;
    /**
     * Sets the description of the Embed.
     * @param {string} description - The description text.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setDescription(description: string): this;
    /**
     * Adds an array of EmbedFields to the Embed.
     * @param {EmbedField[]} fields - An array of EmbedFields to add.
     * @returns The EmbedBuilder instance for method chaining.
     */
    addFields(fields: EmbedField[]): this;
    /**
     * Sets the array of EmbedFields for the Embed.
     * @param {EmbedField[]} fields - An array of EmbedFields to set.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setFields(fields: EmbedField[]): this;
    /**
     * Removes a specified number of EmbedFields starting from a given index.
     * @param {number} index - The starting index to remove fields.
     * @param {number} count - The number of fields to remove.
     * @returns - The EmbedBuilder instance for method chaining.
     */
    spliceFields(index: number, count: number): this;
    /**
     * Sets the footer information for the Embed.
     * @param {EmbedFooter} footer - The footer information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setFooter(footer: EmbedFooter): this;
    /**
     * Sets the image information for the Embed.
     * @param {EmbedImage} image - The image information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setImage(image: EmbedImage): this;
    /**
     * Sets the provider information for the Embed.
     * @param {EmbedProvider} provider - The provider information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setProvider(provider: EmbedProvider): this;
    /**
     * Sets the thumbnail information for the Embed.
     * @param {EmbedThumbnail} thumbnail - The thumbnail information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setThumbnail(thumbnail: EmbedThumbnail): this;
    /**
     * Sets the timestamp for the Embed.
     * @param {string} timestamp - The timestamp string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setTimestamp(timestamp: string): this;
    /**
     * Sets the title for the Embed.
     * @param {string} title - The title text.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setTitle(title: string): this;
    /**
     * Sets the type of the Embed.
     * @param {string} type - The type string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setType(type: string): this;
    /**
     * Sets the URL for the Embed.
     * @param {string} url - The URL string.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setUrl(url: string): this;
    /**
     * Sets the video information for the Embed.
     * @param {EmbedVideo} video - The video information.
     * @returns The EmbedBuilder instance for method chaining.
     */
    setVideo(video: EmbedVideo): this;
    /**
     * Converts an instance of a class to a raw object representation.
     * This method is used to serialize an object's properties into a plain JavaScript object.
     * @returns {Object} A plain object containing the properties of the instance.
     */
    toRaw(): object;
}
