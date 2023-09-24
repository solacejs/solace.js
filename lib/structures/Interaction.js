"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GuildMember_1 = __importDefault(require("./GuildMember"));
const User_1 = __importDefault(require("./User"));
class Interaction {
    constructor(data) {
        this.id = data.id;
        this.member = data.member ? new GuildMember_1.default(data.member) : null;
        this.name = data.name;
        this.type = data.type;
        this.user = data.user ? new User_1.default(data.user) : null;
    }
}
exports.default = Interaction;
