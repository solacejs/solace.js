import { ApiEmbed, ApiEmbedAuthor, ApiEmbedField, ApiEmbedFooter, ApiEmbedImage, ApiEmbedProvider, ApiEmbedThumbnail, ApiEmbedVideo } from "../interfaces/ApiEmbed";
/**
 * Represents an embed
 */
export declare class Embed {
    /**
   * The author of the embed, or undefined if not provided.
   * @type {EmbedAuthor | undefined}
   */
    author?: EmbedAuthor;
    /**
     * The color of the embed, represented as a hexadecimal number, or undefined if not provided.
     * @type {number | undefined}
     */
    color?: number;
    /**
     * The description of the embed, or undefined if not provided.
     * @type {string | undefined}
     */
    description?: string;
    /**
     * The array of fields in the embed.
     * @type {EmbedField[]}
     */
    fields: EmbedField[];
    /**
     * The footer of the embed, or undefined if not provided.
     * @type {EmbedFooter | undefined}
     */
    footer?: EmbedFooter;
    /**
     * The image within the embed, or undefined if not provided.
     * @type {EmbedImage | undefined}
     */
    image?: EmbedImage;
    /**
     * The provider of the embed, or undefined if not provided.
     * @type {EmbedProvider | undefined}
     */
    provider?: EmbedProvider;
    /**
     * The thumbnail image of the embed, or undefined if not provided.
     * @type {EmbedThumbnail | undefined}
     */
    thumbnail?: EmbedThumbnail;
    /**
     * The timestamp for the embed, or undefined if not provided.
     * @type {string | undefined}
     */
    timestamp?: string;
    /**
     * The title of the embed, or undefined if not provided.
     * @type {string | undefined}
     */
    title?: string;
    /**
     * The type of the embed, or undefined if not provided.
     * @type {string | undefined}
     */
    type?: string;
    /**
     * The URL of the embed, or undefined if not provided.
     * @type {string | undefined}
     */
    url?: string;
    /**
     * The video within the embed, or undefined if not provided.
     * @type {EmbedVideo | undefined}
     */
    video?: EmbedVideo;
    /**
     * Creates a new Embed instance.
     * @param {ApiEmbed} data - The data object containing embed information.
     */
    constructor(data: ApiEmbed);
}
/**
 * Represents the footer of an embed.
 */
export declare class EmbedFooter {
    /**
     * The URL of the footer icon, or undefined if not provided.
     * @type {string | undefined}
     */
    iconUrl?: string;
    /**
     * The URL of the proxy footer icon, or undefined if not provided.
     * @type {string | undefined}
     */
    proxyIconUrl?: string;
    /**
     * The text in the footer.
     * @type {string}
     */
    text: string;
    /**
     * Creates a new EmbedFooter instance.
     * @param {ApiEmbedFooter} data - The data object containing footer information.
     */
    constructor(data: ApiEmbedFooter);
    toRaw(): {
        icon_url: string | undefined;
        proxy_icon_url: string | undefined;
        text: string;
    };
}
/**
 * Represents an image within an embed.
 */
export declare class EmbedImage {
    /**
     * The height of the image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    height?: number;
    /**
     * The URL of the proxy image.
     * @type {string}
     */
    proxyUrl: string;
    /**
     * The URL of the image.
     * @type {string}
     */
    url: string;
    /**
     * The width of the image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    width?: number;
    /**
     * Creates a new EmbedImage instance.
     * @param {ApiEmbedImage} data - The data object containing image information.
     */
    constructor(data: ApiEmbedImage);
    toRaw(): {
        height: number | undefined;
        proxy_url: string;
        url: string;
        width: number | undefined;
    };
}
/**
 * Represents a thumbnail image within an embedded message.
 */
export declare class EmbedThumbnail {
    /**
     * The height of the thumbnail image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    height: number | undefined;
    /**
     * The URL of the proxy thumbnail image.
     * @type {string}
     */
    proxyUrl: string;
    /**
     * The URL of the thumbnail image.
     * @type {string}
     */
    url: string;
    /**
     * The width of the thumbnail image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    width?: number;
    /**
     * Creates a new EmbedThumbnail instance.
     * @param {ApiEmbedThumbnail} data - The data object containing thumbnail information.
     */
    constructor(data: ApiEmbedThumbnail);
    toRaw(): {
        height: number | undefined;
        proxy_url: string;
        url: string;
        width: number | undefined;
    };
}
/**
 * Represents a video within an embedded message.
 */
export declare class EmbedVideo {
    /**
     * The height of the video in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    height?: number;
    /**
     * The URL of the proxy video.
     * @type {string}
     */
    proxyUrl: string;
    /**
     * The URL of the video.
     * @type {string}
     */
    url: string;
    /**
     * The width of the video in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    width?: number;
    /**
     * Creates a new EmbedVideo instance.
     * @param {ApiEmbedVideo} data - The data object containing video information.
     */
    constructor(data: ApiEmbedVideo);
    toRaw(): {
        height: number | undefined;
        proxy_url: string;
        url: string;
        width: number | undefined;
    };
}
/**
 * Represents a provider of the embed.
 */
export declare class EmbedProvider {
    /**
     * The name of the provider, or undefined if not provided.
     * @type {string}
     */
    name?: string;
    /**
     * The URL of the provider, or undefined if not provided.
     * @type {string | undefined}
     */
    url?: string;
    /**
     * Creates a new EmbedProvider instance.
     * @param {ApiEmbedProvider} data - The data object containing provider information.
     */
    constructor(data: ApiEmbedProvider);
}
/**
 * Represents the author of an embed.
 */
export declare class EmbedAuthor {
    /**
     * The URL of the author's icon, or undefined if not provided.
     * @type {string | undefined}
     */
    iconUrl?: string;
    /**
     * The name of the author.
     * @type {string}
     */
    name: string;
    /**
     * The URL of the proxy author's icon, or undefined if not provided.
     * @type {string | undefined}
     */
    proxyIconUrl?: string;
    /**
     * The URL of the author, or undefined if not provided.
     * @type {string | undefined}
     */
    url?: string;
    /**
     * Creates a new EmbedAuthor instance.
     * @param {ApiEmbedAuthor} data - The data object containing author information.
     */
    constructor(data: ApiEmbedAuthor);
    toRaw(): {
        icon_url: string | undefined;
        name: string;
        proxy_icon_url: string | undefined;
        url: string | undefined;
    };
}
/**
 * Represents a field within an embed.
 */
export declare class EmbedField {
    /**
     * Indicates whether the field should be displayed inline.
     * @type {boolean}
     */
    inline: boolean;
    /**
     * The name of the field.
     * @type {string}
     */
    name: string;
    /**
     * The value of the field.
     * @type {string}
     */
    value: string;
    /**
     * Creates a new EmbedField instance.
     * @param {ApiEmbedField} data - The data object containing field information.
     */
    constructor(data: ApiEmbedField);
}
