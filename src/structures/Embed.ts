import {
    ApiEmbed,
    ApiEmbedAuthor,
    ApiEmbedField,
    ApiEmbedFooter,
    ApiEmbedImage,
    ApiEmbedProvider,
    ApiEmbedThumbnail,
    ApiEmbedVideo
} from "../interfaces/ApiEmbed";

/**
 * Represents an embed
 */
export class Embed {

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
    constructor(data: ApiEmbed) {
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

/**
 * Represents the footer of an embed.
 */
export class EmbedFooter {

    /**
     * The URL of the footer icon, or undefined if not provided.
     * @type {string | undefined}
     */
    public iconUrl?: string;

    /**
     * The URL of the proxy footer icon, or undefined if not provided.
     * @type {string | undefined}
     */
    public proxyIconUrl?: string;

    /**
     * The text in the footer.
     * @type {string}
     */
    public text: string;

    /**
     * Creates a new EmbedFooter instance.
     * @param {ApiEmbedFooter} data - The data object containing footer information.
     */
    constructor(data: ApiEmbedFooter) {
        this.iconUrl = data.icon_url;
        this.proxyIconUrl = data.proxy_icon_url;
        this.text = data.text;
    }

    public toRaw() {
        return {
            icon_url: this.iconUrl,
            proxy_icon_url: this.proxyIconUrl,
            text: this.text
        }
    }
}

/**
 * Represents an image within an embed.
 */
export class EmbedImage {

    /**
     * The height of the image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public height?: number;

    /**
     * The URL of the proxy image.
     * @type {string}
     */
    public proxyUrl: string;

    /**
     * The URL of the image.
     * @type {string}
     */
    public url: string;

    /**
     * The width of the image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public width?: number;

    /**
     * Creates a new EmbedImage instance.
     * @param {ApiEmbedImage} data - The data object containing image information.
     */
    constructor(data: ApiEmbedImage) {
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }

    public toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        }
    }
}

/**
 * Represents a thumbnail image within an embedded message.
 */
export class EmbedThumbnail {

    /**
     * The height of the thumbnail image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public height: number | undefined;

    /**
     * The URL of the proxy thumbnail image.
     * @type {string}
     */
    public proxyUrl: string;

    /**
     * The URL of the thumbnail image.
     * @type {string}
     */
    public url: string;

    /**
     * The width of the thumbnail image in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public width?: number;

    /**
     * Creates a new EmbedThumbnail instance.
     * @param {ApiEmbedThumbnail} data - The data object containing thumbnail information.
     */
    constructor(data: ApiEmbedThumbnail) {
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }

    public toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        }
    }
}

/**
 * Represents a video within an embedded message.
 */
export class EmbedVideo {

    /**
     * The height of the video in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public height?: number;

    /**
     * The URL of the proxy video.
     * @type {string}
     */
    public proxyUrl: string;

    /**
     * The URL of the video.
     * @type {string}
     */
    public url: string;

    /**
     * The width of the video in pixels, or undefined if not provided.
     * @type {number | undefined}
     */
    public width?: number;

    /**
     * Creates a new EmbedVideo instance.
     * @param {ApiEmbedVideo} data - The data object containing video information.
     */
    constructor(data: ApiEmbedVideo) {
        this.height = data.height;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width;
    }

    public toRaw() {
        return {
            height: this.height,
            proxy_url: this.proxyUrl,
            url: this.url,
            width: this.width
        }
    }
}

/**
 * Represents a provider of the embed.
 */
export class EmbedProvider {

    /**
     * The name of the provider, or undefined if not provided.
     * @type {string}
     */
    public name?: string;

    /**
     * The URL of the provider, or undefined if not provided.
     * @type {string | undefined}
     */
    public url?: string;

    /**
     * Creates a new EmbedProvider instance.
     * @param {ApiEmbedProvider} data - The data object containing provider information.
     */
    constructor(data: ApiEmbedProvider) {
        this.name = data.name;
        this.url = data.url;
    }
}

/**
 * Represents the author of an embed.
 */
export class EmbedAuthor {

    /**
     * The URL of the author's icon, or undefined if not provided.
     * @type {string | undefined}
     */
    public iconUrl?: string;

    /**
     * The name of the author.
     * @type {string}
     */
    public name: string;

    /**
     * The URL of the proxy author's icon, or undefined if not provided.
     * @type {string | undefined}
     */
    public proxyIconUrl?: string;

    /**
     * The URL of the author, or undefined if not provided.
     * @type {string | undefined}
     */
    public url?: string;

    /**
     * Creates a new EmbedAuthor instance.
     * @param {ApiEmbedAuthor} data - The data object containing author information.
     */
    constructor(data: ApiEmbedAuthor) {
        this.iconUrl = data.icon_url;
        this.name = data.name;
        this.proxyIconUrl = data.proxy_icon_url;
        this.url = data.url;
    }

    public toRaw() {
        return {
            icon_url: this.iconUrl,
            name: this.name,
            proxy_icon_url: this.proxyIconUrl,
            url: this.url
        }
    }
}

/**
 * Represents a field within an embed.
 */
export class EmbedField {

    /**
     * Indicates whether the field should be displayed inline.
     * @type {boolean}
     */
    public inline: boolean;

    /**
     * The name of the field.
     * @type {string}
     */
    public name: string;

    /**
     * The value of the field.
     * @type {string}
     */
    public value: string;

    /**
     * Creates a new EmbedField instance.
     * @param {ApiEmbedField} data - The data object containing field information.
     */
    constructor(data: ApiEmbedField) {
        this.inline = !!data.inline;
        this.name = data.name;
        this.value = data.value;
    }
}