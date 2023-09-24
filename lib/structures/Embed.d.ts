import ApiEmbed, { ApiEmbedAuthor, ApiEmbedField, ApiEmbedFooter, ApiEmbedImage, ApiEmbedProvider, ApiEmbedThumbnail, ApiEmbedVideo } from "../interfaces/ApiEmbed";
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
    constructor(data: ApiEmbed);
}
export declare class EmbedFooter {
    iconUrl: string | null;
    proxyIconUrl: string | null;
    text: string;
    constructor(data: ApiEmbedFooter);
}
export declare class EmbedImage {
    height: number | null;
    proxyUrl: string;
    url: string;
    width: number | null;
    constructor(data: ApiEmbedImage);
}
export declare class EmbedThumbnail {
    height: number | null;
    proxyUrl: string;
    url: string;
    width: number | null;
    constructor(data: ApiEmbedThumbnail);
}
export declare class EmbedVideo {
    height: number | null;
    proxyUrl: string;
    url: string;
    width: number | null;
    constructor(data: ApiEmbedVideo);
}
export declare class EmbedProvider {
    name: string | null;
    url: string | null;
    constructor(data: ApiEmbedProvider);
}
export declare class EmbedAuthor {
    iconUrl: string | null;
    name: string;
    proxyIconUrl: string | null;
    url: string | null;
    constructor(data: ApiEmbedAuthor);
}
export declare class EmbedField {
    inline: boolean;
    name: string;
    value: string;
    constructor(data: ApiEmbedField);
}
