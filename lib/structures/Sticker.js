"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerItem = void 0;
const User_1 = __importDefault(require("./User"));
class Sticker {
    constructor(data) {
        var _a, _b, _c, _d;
        this.asset = (_a = data.asset) !== null && _a !== void 0 ? _a : null;
        this.available = !!data.available;
        this.description = data.description;
        this.formatType = data.format_type;
        this.guildId = (_b = data.guild_id) !== null && _b !== void 0 ? _b : null;
        this.id = data.id;
        this.name = data.name;
        this.packId = (_c = data.pack_id) !== null && _c !== void 0 ? _c : null;
        this.sortValue = (_d = data.sort_value) !== null && _d !== void 0 ? _d : null;
        this.tags = data.tags;
        this.type = data.type;
        this.user = data.user ? new User_1.default(data.user) : null;
    }
}
exports.default = Sticker;
class StickerItem {
    constructor(data) {
        this.formatType = data.format_type;
        this.id = data.id;
        this.name = data.name;
    }
}
exports.StickerItem = StickerItem;
