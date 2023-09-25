import { Embed, EmbedAuthor, EmbedField, EmbedFooter, EmbedImage, EmbedProvider, EmbedThumbnail, EmbedVideo } from "../structures/Embed";
export declare class EmbedBuilder {
    private data;
    constructor(data?: Embed);
    setAuthor(author: EmbedAuthor): this;
    setColor(color: number): this;
    setDescription(description: string): this;
    addFields(fields: EmbedField[]): this;
    setFields(fields: EmbedField[]): this;
    spliceFields(index: number, count: number): this;
    setFooter(footer: EmbedFooter): this;
    setImage(image: EmbedImage): this;
    setProvider(provider: EmbedProvider): this;
    setThumbnail(thumbnail: EmbedThumbnail): this;
    setTimestamp(timestamp: string): this;
    setTitle(title: string): this;
    setType(type: string): this;
    setUrl(url: string): this;
    setVideo(video: EmbedVideo): this;
    toRaw(): {
        author: {
            icon_url: string | undefined;
            name: string;
            proxy_icon_url: string | undefined;
            url: string | undefined;
        } | undefined;
        footer: {
            icon_url: string | undefined;
            proxy_icon_url: string | undefined;
            text: string;
        } | undefined;
        image: {
            height: number | undefined;
            proxy_url: string;
            url: string;
            width: number | undefined;
        } | undefined;
        thumbnail: {
            height: number | undefined;
            proxy_url: string;
            url: string;
            width: number | undefined;
        } | undefined;
        video: {
            height: number | undefined;
            proxy_url: string;
            url: string;
            width: number | undefined;
        } | undefined;
        color?: number | undefined;
        description?: string | undefined;
        fields: EmbedField[];
        provider?: EmbedProvider | undefined;
        timestamp?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
    };
}
