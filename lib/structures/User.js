"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Constants_1 = require("../config/Constants");
const OpCodes_1 = require("../config/OpCodes");
const Logger_1 = require("../util/Logger");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
/**
 * Represents a user.
 */
class User {
    /**
     * Constructs a new User instance.
     * @param {ApiUser} data - The user data.
     */
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.accentColor = (_a = data.accent_color) !== null && _a !== void 0 ? _a : null;
        this.avatar = data.avatar;
        this.avatarDecoration = (_b = data.avatar_decoration) !== null && _b !== void 0 ? _b : null;
        this.banner = (_c = data.banner) !== null && _c !== void 0 ? _c : null;
        this.bot = !!data.bot;
        this.client = data.client;
        this.discriminator = data.discriminator;
        this.email = (_d = data.email) !== null && _d !== void 0 ? _d : null;
        this.flags = (_e = data.flags) !== null && _e !== void 0 ? _e : null;
        this.globalName = data.global_name;
        this.id = data.id;
        this.locale = (_f = data.locale) !== null && _f !== void 0 ? _f : null;
        this.mfaEnabled = !!data.mfa_enabled;
        this.premiumType = (_g = data.premium_type) !== null && _g !== void 0 ? _g : null;
        this.publicFlags = (_h = data.public_flags) !== null && _h !== void 0 ? _h : null;
        this.system = !!data.system;
        this.username = data.username;
        this.verified = !!data.verified;
    }
    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param status - The status you want the bot to have.
     */
    setStatus(status) {
        var _a;
        (_a = this.client.ws) === null || _a === void 0 ? void 0 : _a.send({ op: OpCodes_1.OpCodes.PRESENCE_UPDATE, d: { since: null, activities: [], status, afk: false } });
    }
    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param username - The username you want the bot to have.
     */
    setUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${Constants_1.Constants.API}/users/@me`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bot ${this.client.options.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username
                    })
                });
                if (!res.ok)
                    Logger_1.Logger.error("Failed to change the bot's username, please try again later.");
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    setAvatar(avatar) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let setAvatar;
                if (avatar.startsWith('data:')) {
                    setAvatar = avatar;
                }
                else if (/^https?:\/\//.test(avatar)) {
                    const res = yield fetch(avatar);
                    const arr = avatar.split(".");
                    setAvatar = `data:${arr[arr.length - 1]};base64,${Buffer.from(yield res.arrayBuffer()).toString("base64")}`;
                }
                else {
                    const file = path_1.default.resolve(avatar);
                    const stats = yield promises_1.default.stat(file);
                    if (!stats.isFile())
                        return Logger_1.Logger.error("The avatar you have provided is not a file!");
                    const arr = avatar.split(".");
                    setAvatar = `data:${arr[arr.length - 1]};base64,${Buffer.from(yield promises_1.default.readFile(file)).toString("base64")}`;
                }
                const res = yield fetch(`${Constants_1.Constants.API}/users/@me`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bot ${this.client.options.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        avatar: setAvatar
                    })
                });
                if (!res.ok)
                    Logger_1.Logger.error("Failed to change the bot's avatar, please try again later.");
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.User = User;
