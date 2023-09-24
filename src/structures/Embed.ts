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
   * The author of the embed, or null if not provided.
   * @type {EmbedAuthor | null}
   */
    author: EmbedAuthor | null;

    /**
     * The color of the embed, represented as a hexadecimal number, or null if not provided.
     * @type {number | null}
     */
    color: number | null;

    /**
     * The description of the embed, or null if not provided.
     * @type {string | null}
     */
    description: string | null;

    /**
     * The array of fields in the embed.
     * @type {EmbedField[]}
     */
    fields: EmbedField[];

    /**
     * The footer of the embed, or null if not provided.
     * @type {EmbedFooter | null}
     */
    footer: EmbedFooter | null;

    /**
     * The image within the embed, or null if not provided.
     * @type {EmbedImage | null}
     */
    image: EmbedImage | null;

    /**
     * The provider of the embed, or null if not provided.
     * @type {EmbedProvider | null}
     */
    provider: EmbedProvider | null;

    /**
     * The thumbnail image of the embed, or null if not provided.
     * @type {EmbedThumbnail | null}
     */
    thumbnail: EmbedThumbnail | null;

    /**
     * The timestamp for the embed, or null if not provided.
     * @type {string | null}
     */
    timestamp: string | null;

    /**
     * The title of the embed, or null if not provided.
     * @type {string | null}
     */
    title: string | null;

    /**
     * The type of the embed, or null if not provided.
     * @type {string | null}
     */
    type: string | null;

    /**
     * The URL of the embed, or null if not provided.
     * @type {string | null}
     */
    url: string | null;

    /**
     * The video within the embed, or null if not provided.
     * @type {EmbedVideo | null}
     */
    video: EmbedVideo | null;

    /**
     * Creates a new Embed instance.
     * @param {ApiEmbed} data - The data object containing embed information.
     */
    constructor(data: ApiEmbed) {
        this.author = data.author ? new EmbedAuthor(data.author) : null;
        this.color = data.color ?? null;
        this.description = data.description ?? null;
        this.fields = data.fields.map((field) => new EmbedField(field));
        this.footer = data.footer ? new EmbedFooter(data.footer) : null;
        this.image = data.image ? new EmbedImage(data.image) : null;
        this.provider = data.provider ? new EmbedProvider(data.provider) : null;
        this.thumbnail = data.thumbnail ? new EmbedThumbnail(data.thumbnail) : null;
        this.timestamp = data.timestamp ?? null;
        this.title = data.title ?? null;
        this.type = data.type ?? null;
        this.url = data.url ?? null;
        this.video = data.video ? new EmbedVideo(data.video) : null;
    }
}

/**
 * Represents the footer of an embed.
 */
export class EmbedFooter {

    /**
     * The URL of the footer icon, or null if not provided.
     * @type {string | null}
     */
    public iconUrl: string | null;

    /**
     * The URL of the proxy footer icon, or null if not provided.
     * @type {string | null}
     */
    public proxyIconUrl: string | null;

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
        this.iconUrl = data.icon_url ?? null;
        this.proxyIconUrl = data.proxy_icon_url ?? null;
        this.text = data.text;
    }
}

/**
 * Represents an image within an embed.
 */
export class EmbedImage {

    /**
     * The height of the image in pixels, or null if not provided.
     * @type {number | null}
     */
    public height: number | null;

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
     * The width of the image in pixels, or null if not provided.
     * @type {number | null}
     */
    public width: number | null;

    /**
     * Creates a new EmbedImage instance.
     * @param {ApiEmbedImage} data - The data object containing image information.
     */
    constructor(data: ApiEmbedImage) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

/**
 * Represents a thumbnail image within an embedded message.
 */
export class EmbedThumbnail {

    /**
     * The height of the thumbnail image in pixels, or null if not provided.
     * @type {number | null}
     */
    public height: number | null;

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
     * The width of the thumbnail image in pixels, or null if not provided.
     * @type {number | null}
     */
    public width: number | null;

    /**
     * Creates a new EmbedThumbnail instance.
     * @param {ApiEmbedThumbnail} data - The data object containing thumbnail information.
     */
    constructor(data: ApiEmbedThumbnail) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

/**
 * Represents a video within an embedded message.
 */
export class EmbedVideo {

    /**
     * The height of the video in pixels, or null if not provided.
     * @type {number | null}
     */
    public height: number | null;

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
     * The width of the video in pixels, or null if not provided.
     * @type {number | null}
     */
    public width: number | null;

    /**
     * Creates a new EmbedVideo instance.
     * @param {ApiEmbedVideo} data - The data object containing video information.
     */
    constructor(data: ApiEmbedVideo) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

/**
 * Represents a provider of the embed.
 */
export class EmbedProvider {

    /**
     * The name of the provider, or null if not provided.
     * @type {string | null}
     */
    public name: string | null;

    /**
     * The URL of the provider, or null if not provided.
     * @type {string | null}
     */
    public url: string | null;

    /**
     * Creates a new EmbedProvider instance.
     * @param {ApiEmbedProvider} data - The data object containing provider information.
     */
    constructor(data: ApiEmbedProvider) {
        this.name = data.name ?? null;
        this.url = data.url ?? null;
    }
}


/**
 * Represents the author of an embed.
 */
export class EmbedAuthor {

    /**
     * The URL of the author's icon, or null if not provided.
     * @type {string | null}
     */
    public iconUrl: string | null;

    /**
     * The name of the author.
     * @type {string}
     */
    public name: string;

    /**
     * The URL of the proxy author's icon, or null if not provided.
     * @type {string | null}
     */
    public proxyIconUrl: string | null;

    /**
     * The URL of the author, or null if not provided.
     * @type {string | null}
     */
    public url: string | null;

    /**
     * Creates a new EmbedAuthor instance.
     * @param {ApiEmbedAuthor} data - The data object containing author information.
     */
    constructor(data: ApiEmbedAuthor) {
        this.iconUrl = data.icon_url ?? null;
        this.name = data.name;
        this.proxyIconUrl = data.proxy_icon_url ?? null;
        this.url = data.url ?? null;
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