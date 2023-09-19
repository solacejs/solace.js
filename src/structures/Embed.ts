import IEmbed, { IEmbedAuthor, IEmbedField, IEmbedFooter, IEmbedImage, IEmbedProvider, IEmbedThumbnail, IEmbedVideo } from "../interfaces/IEmbed";

export default class Embed {
    author: EmbedAuthor | null;
    color: number | null;
    description: string | null;
    fields: EmbedField[];
    footer: EmbedFooter | null;
    image: EmbedImage | null;
    provider: EmbedProvider | null;
    thumbnail: EmbedThumbnail | null;
    timestamp: string | null;
    title: string | null;
    type: string | null;
    url: string | null;
    video: EmbedVideo | null;

    constructor(data: IEmbed) {
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

export class EmbedFooter {

    public iconUrl: string | null;
    public proxyIconUrl: string | null;
    public text: string;

    constructor(data: IEmbedFooter) {
        this.iconUrl = data.icon_url ?? null;
        this.proxyIconUrl = data.proxy_icon_url ?? null;
        this.text = data.text;
    }
}

export class EmbedImage {

    public height: number | null;
    public proxyUrl: string;
    public url: string;
    public width: number | null;

    constructor(data: IEmbedImage) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

export class EmbedThumbnail {

    public height: number | null;
    public proxyUrl: string;
    public url: string;
    public width: number | null;

    constructor(data: IEmbedThumbnail) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

export class EmbedVideo {

    public height: number | null;
    public proxyUrl: string;
    public url: string;
    public width: number | null;

    constructor(data: IEmbedVideo) {
        this.height = data.height ?? null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = data.width ?? null;
    }
}

export class EmbedProvider {

    public name: string | null;
    public url: string | null;

    constructor(data: IEmbedProvider) {
        this.name = data.name ?? null;
        this.url = data.url ?? null;
    }
}

export class EmbedAuthor {

    public iconUrl: string | null;
    public name: string;
    public proxyIconUrl: string | null;
    public url: string | null;

    constructor(data: IEmbedAuthor) {
        this.iconUrl = data.icon_url ?? null;
        this.name = data.name;
        this.proxyIconUrl = data.proxy_icon_url ?? null;
        this.url = data.url ?? null;
    }
}

export class EmbedField {

    public inline: boolean;
    public name: string;
    public value: string;

    constructor(data: IEmbedField) {
        this.inline = !!data.inline;
        this.name = data.name;
        this.value = data.value;
    }
}