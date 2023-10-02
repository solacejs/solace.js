"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
class EmbedBuilder {
    constructor(data) {
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
    setAuthor(author) {
        this.data.author = author;
        return this;
    }
    setColor(color) {
        this.data.color = color;
        return this;
    }
    setDescription(description) {
        this.data.description = description;
        return this;
    }
    addFields(fields) {
        for (const field of fields)
            this.data.fields.push(field);
        return this;
    }
    setFields(fields) {
        this.data.fields = fields;
        return this;
    }
    spliceFields(index, count) {
        this.data.fields.splice(index, count);
        return this;
    }
    setFooter(footer) {
        this.data.footer = footer;
        return this;
    }
    setImage(image) {
        this.data.image = image;
        return this;
    }
    setProvider(provider) {
        this.data.provider = provider;
        return this;
    }
    setThumbnail(thumbnail) {
        this.data.thumbnail = thumbnail;
        return this;
    }
    setTimestamp(timestamp) {
        this.data.timestamp = timestamp;
        return this;
    }
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    setType(type) {
        this.data.type = type;
        return this;
    }
    setUrl(url) {
        this.data.url = url;
        return this;
    }
    setVideo(video) {
        this.data.video = video;
        return this;
    }
    toRaw() {
        return Object.assign(Object.assign({}, this.data), { author: this.data.author ? this.data.author.toRaw() : undefined, footer: this.data.footer ? this.data.footer.toRaw() : undefined, image: this.data.image ? this.data.image.toRaw() : undefined, thumbnail: this.data.thumbnail ? this.data.thumbnail.toRaw() : undefined, video: this.data.video ? this.data.video.toRaw() : undefined });
    }
}
exports.EmbedBuilder = EmbedBuilder;
