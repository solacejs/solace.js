"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interaction = exports.InteractionType = void 0;
const GuildMember_1 = require("./GuildMember");
const Message_1 = require("./Message");
const User_1 = require("./User");
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["PING"] = 1] = "PING";
    InteractionType[InteractionType["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
    InteractionType[InteractionType["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
    InteractionType[InteractionType["APPLICATION_COMMAND_AUTOCOMPLETE"] = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE";
    InteractionType[InteractionType["MODAL_SUBMIT"] = 5] = "MODAL_SUBMIT";
})(InteractionType || (exports.InteractionType = InteractionType = {}));
/**
 * Represents an interaction with the bot.
 */
class Interaction {
    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e;
        this.appPermissions = (_a = data.app_permissions) !== null && _a !== void 0 ? _a : null;
        this.applicationId = data.application_id;
        this.commandName = data.data ? (_b = data.data.name) !== null && _b !== void 0 ? _b : null : null;
        this.guildId = (_c = data.guild_id) !== null && _c !== void 0 ? _c : null;
        this.guildLocale = (_d = data.guild_locale) !== null && _d !== void 0 ? _d : null;
        this.id = data.id;
        this.locale = (_e = data.locale) !== null && _e !== void 0 ? _e : null;
        this.member = data.member ? new GuildMember_1.GuildMember(data.member) : null;
        this.message = data.message ? new Message_1.Message(data.message) : null;
        this.name = data.name;
        this.token = data.token;
        this.type = data.type;
        this.user = data.user ? new User_1.User(data.user) : null;
        this.version = data.version;
    }
}
exports.Interaction = Interaction;
