/**
 * Represents the structure of an embed.
 */
export interface ApiEmbed {
    /**
     *  Information about the author of the embed, if provided. It follows the ApiEmbedAuthor interface.
     */
    author?: ApiEmbedAuthor;

    /**
     * A numerical color value associated with the embed.
     */
    color?: number;

    /**
     * The description text of the embed.
     */
    description?: string;

    /**
     * An array of embed fields, each following the ApiEmbedField interface.
     */
    fields: ApiEmbedField[];

    /**
     * Information about the footer of the embed, if provided. It follows the ApiEmbedFooter interface.
     */
    footer?: ApiEmbedFooter;

    /**
     * Information about an image included in the embed, if provided. It follows the ApiEmbedImage interface.
     */
    image?: ApiEmbedImage;

    /**
     *  Information about the provider of the embed, if provided. It follows the ApiEmbedProvider interface.
     */
    provider?: ApiEmbedProvider;

    /**
     * Information about a thumbnail image, if provided. It follows the ApiEmbedThumbnail interface.
     */
    thumbnail?: ApiEmbedThumbnail;

    /**
     * A timestamp associated with the embed.
     */
    timestamp?: string;

    /**
     * The title of the embed.
     */
    title?: string;

    /**
     * The type of the embed.
     */
    type?: string;

    /**
     * A URL associated with the embed.
     */
    url?: string;

    /**
     * Information about a video included in the embed, if provided. It follows the ApiEmbedVideo interface.
     */
    video?: ApiEmbedVideo;
}

/**
 * Represents the structure of the footer of an embed.
 */
export interface ApiEmbedFooter {
    /**
     * The URL of the footer icon.
     */
    icon_url?: string;

    /**
     * A proxy URL for the footer icon.
     */
    proxy_icon_url?: string;

    /**
     * The text content of the footer.
     */
    text: string;
}

/**
 * Represents the structure of an image included in the embed.
 */
export interface ApiEmbedImage {
    /**
     * The height of the image.
     */
    height?: number;

    /**
     * A proxy URL for the image.
     */
    proxy_url: string;

    /**
     * The URL of the image.
     */
    url: string;

    /**
     * The width of the image.
     */
    width?: number;
}

/**
 * Represents the strucute of a thumbnail image included in the embed.
 */
export interface ApiEmbedThumbnail {
    /**
     * The height of the thumbnail image.
     */
    height?: number;

    /**
     * A proxy URL for the thumbnail image.
     */
    proxy_url: string;

    /**
     * The URL of the thumbnail image.
     */
    url: string;

    /**
     * The width of the thumbnail image.
     */
    width?: number;
}

export interface ApiEmbedVideo {
    /**
     * The height of the video.
     */
    height?: number;

    /**
     * A proxy URL for the video.
     */
    proxy_url: string;

    /**
     * The URL of the video.
     */
    url: string;

    /**
     * The width of the video.
     */
    width?: number;
}

/**
 * Represents the structure of a provider of the embed.
 */
export interface ApiEmbedProvider {
    /**
     * The name of the provider.
     */
    name?: string;

    /**
     * The URL of the provider.
     */
    url?: string;
}

/**
 * Represents the  structure of the author of the embed.
 */
export interface ApiEmbedAuthor {
    /**
     * The URL of the author's icon.
     */
    icon_url?: string;

    /**
     * The name of the author.
     */
    name: string;

    /**
     * A proxy URL for the author's icon.
     */
    proxy_icon_url?: string;

    /**
     * The URL associated with the author.
     */
    url?: string;
}

/**
 * Represents the structure of a field within an embed.
 */
export interface ApiEmbedField {
    /**
     * Specifies whether the field should be displayed inline.
     */
    inline?: boolean;

    /**
     * The name or title of the field.
     */
    name: string;

    /**
     * The value or content of the field.
     */
    value: string;
}