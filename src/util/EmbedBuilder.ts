import { ApiEmbed } from "../interfaces/ApiEmbed";
import { Embed, EmbedAuthor, EmbedField, EmbedFooter, EmbedImage, EmbedProvider, EmbedThumbnail, EmbedVideo } from "../structures/Embed";

export class EmbedBuilder {

    private data: Embed;

    constructor(data?: Embed) {
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

    public setAuthor(author: EmbedAuthor) {
        this.data.author = author;
        return this;
    }

    public setColor(color: number) {
        this.data.color = color;
        return this;
    }

    public setDescription(description: string) {
        this.data.description = description;
        return this;
    }

    public addFields(fields: EmbedField[]) {
        for (const field of fields) this.data.fields.push(field);
        return this;
    }

    public setFields(fields: EmbedField[]) {
        this.data.fields = fields;
        return this;
    }

    public spliceFields(index: number, count: number) {
        this.data.fields.splice(index, count);
        return this;
    }

    public setFooter(footer: EmbedFooter) {
        this.data.footer = footer;
        return this;
    }

    public setImage(image: EmbedImage) {
        this.data.image = image;
        return this;
    }

    public setProvider(provider: EmbedProvider) {
        this.data.provider = provider;
        return this;
    }

    public setThumbnail(thumbnail: EmbedThumbnail) {
        this.data.thumbnail = thumbnail;
        return this;
    }

    public setTimestamp(timestamp: string) {
        this.data.timestamp = timestamp;
        return this;
    }

    public setTitle(title: string) {
        this.data.title = title;
        return this;
    }

    public setType(type: string) {
        this.data.type = type;
        return this;
    }

    public setUrl(url: string) {
        this.data.url = url;
        return this;
    }

    public setVideo(video: EmbedVideo) {
        this.data.video = video;
        return this;
    }

    public toRaw() {
        return {
            ...this.data,
            author: this.data.author ? this.data.author.toRaw() : undefined,
            footer: this.data.footer ? this.data.footer.toRaw() : undefined,
            image: this.data.image ? this.data.image.toRaw() : undefined,
            thumbnail: this.data.thumbnail ? this.data.thumbnail.toRaw() : undefined,
            video: this.data.video ? this.data.video.toRaw() : undefined,
        }
    }
}