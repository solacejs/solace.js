export default interface IEmbed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: ApiEmbedFooter;
    image?: ApiEmbedImage;
    thumbnail?: ApiEmbedThumbnail;
    video?: ApiEmbedVideo;
    provider?: ApiEmbedProvider;
    author?: ApiEmbedAuthor;
    fields: ApiEmbedField[];
}
export interface ApiEmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
export interface ApiEmbedImage {
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
}
export interface ApiEmbedThumbnail {
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
}
export interface ApiEmbedVideo {
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
}
export interface ApiEmbedProvider {
    name?: string;
    url?: string;
}
export interface ApiEmbedAuthor {
    name: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
export interface ApiEmbedField {
    name: string;
    value: string;
    inline?: boolean;
}
