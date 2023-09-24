"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attachment {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.contentType = (_a = data.content_type) !== null && _a !== void 0 ? _a : null;
        this.description = (_b = data.description) !== null && _b !== void 0 ? _b : null;
        this.durationSecs = (_c = data.duration_secs) !== null && _c !== void 0 ? _c : null;
        this.ephemeral = !!data.ephemeral;
        this.filename = data.filename;
        this.flags = (_d = data.flags) !== null && _d !== void 0 ? _d : null;
        this.height = (_e = data.height) !== null && _e !== void 0 ? _e : null;
        this.id = data.id;
        this.proxyUrl = data.proxy_url;
        this.size = data.size;
        this.url = data.url;
        this.waveform = (_f = data.waveform) !== null && _f !== void 0 ? _f : null;
        this.width = (_g = data.width) !== null && _g !== void 0 ? _g : null;
    }
}
exports.default = Attachment;
