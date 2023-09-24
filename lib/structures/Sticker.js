"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerItem = exports.Sticker = void 0;
const User_1 = require("./User");
/**
 * Represents a sticker.
 */
class Sticker {
    /**
     * Creates a new Sticker instance.
     * @param {ApiSticker} data - The data object containing sticker information.
     */
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
        this.user = data.user ? new User_1.User(data.user) : null;
    }
}
exports.Sticker = Sticker;
/**
 * Represents an item of a sticker pack.
 */
class StickerItem {
    /**
     * Creates a new StickerItem instance.
     * @param {ApiStickerItem} data - The data object containing sticker item information.
     */
    constructor(data) {
        this.formatType = data.format_type;
        this.id = data.id;
        this.name = data.name;
    }
}
exports.StickerItem = StickerItem;
