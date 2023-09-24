"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
const User_1 = require("./User");
/**
 * Represents an emoji.
 */
class Emoji {
    /**
     * Creates a new Emoji instance.
     * @param {ApiEmoji} data - The data object containing emoji information.
     */
    constructor(data) {
        this.animated = !!data.animated;
        this.available = !!data.available;
        this.id = data.id;
        this.managed = !!data.managed;
        this.name = data.name;
        this.requireColons = !!data.require_colons;
        this.roles = data.roles;
        this.user = data.user ? new User_1.User(data.user) : null;
    }
}
exports.Emoji = Emoji;
