"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedField = exports.EmbedAuthor = exports.EmbedProvider = exports.EmbedVideo = exports.EmbedThumbnail = exports.EmbedImage = exports.EmbedFooter = void 0;
class Embed {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.author = data.author ? new EmbedAuthor(data.author) : null;
        this.color = (_a = data.color) !== null && _a !== void 0 ? _a : null;
        this.description = (_b = data.description) !== null && _b !== void 0 ? _b : null;
        this.fields = data.fields.map((field) => new EmbedField(field));
        this.footer = data.footer ? new EmbedFooter(data.footer) : null;
        this.image = data.image ? new EmbedImage(data.image) : null;
        this.provider = data.provider ? new EmbedProvider(data.provider) : null;
        this.thumbnail = data.thumbnail ? new EmbedThumbnail(data.thumbnail) : null;
        this.timestamp = (_c = data.timestamp) !== null && _c !== void 0 ? _c : null;
        this.title = (_d = data.title) !== null && _d !== void 0 ? _d : null;
        this.type = (_e = data.type) !== null && _e !== void 0 ? _e : null;
        this.url = (_f = data.url) !== null && _f !== void 0 ? _f : null;
        this.video = data.video ? new EmbedVideo(data.video) : null;
    }
}
exports.default = Embed;
class EmbedFooter {
    constructor(data) {
        var _a, _b;
        this.iconUrl = (_a = data.icon_url) !== null && _a !== void 0 ? _a : null;
        this.proxyIconUrl = (_b = data.proxy_icon_url) !== null && _b !== void 0 ? _b : null;
        this.text = data.text;
    }
}
exports.EmbedFooter = EmbedFooter;
class EmbedImage {
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedImage = EmbedImage;
class EmbedThumbnail {
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedThumbnail = EmbedThumbnail;
class EmbedVideo {
    constructor(data) {
        var _a, _b;
        this.height = (_a = data.height) !== null && _a !== void 0 ? _a : null;
        this.proxyUrl = data.proxy_url;
        this.url = data.url;
        this.width = (_b = data.width) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedVideo = EmbedVideo;
class EmbedProvider {
    constructor(data) {
        var _a, _b;
        this.name = (_a = data.name) !== null && _a !== void 0 ? _a : null;
        this.url = (_b = data.url) !== null && _b !== void 0 ? _b : null;
    }
}
exports.EmbedProvider = EmbedProvider;
class EmbedAuthor {
    constructor(data) {
        var _a, _b, _c;
        this.iconUrl = (_a = data.icon_url) !== null && _a !== void 0 ? _a : null;
        this.name = data.name;
        this.proxyIconUrl = (_b = data.proxy_icon_url) !== null && _b !== void 0 ? _b : null;
        this.url = (_c = data.url) !== null && _c !== void 0 ? _c : null;
    }
}
exports.EmbedAuthor = EmbedAuthor;
class EmbedField {
    constructor(data) {
        this.inline = !!data.inline;
        this.name = data.name;
        this.value = data.value;
    }
}
exports.EmbedField = EmbedField;
