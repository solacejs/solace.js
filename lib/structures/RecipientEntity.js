"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipientEntity = void 0;
class RecipientEntity {
    constructor(data) {
        this.avatar = data.avatar;
        this.discriminator = data.discriminator;
        this.id = data.id;
        this.username = data.username;
    }
}
exports.RecipientEntity = RecipientEntity;
