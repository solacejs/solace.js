"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interaction = void 0;
const GuildMember_1 = require("./GuildMember");
const User_1 = require("./User");
/**
 * Represents an interaction with the bot.
 */
class Interaction {
    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data) {
        this.id = data.id;
        this.member = data.member ? new GuildMember_1.GuildMember(data.member) : null;
        this.name = data.name;
        this.type = data.type;
        this.user = data.user ? new User_1.User(data.user) : null;
    }
}
exports.Interaction = Interaction;
