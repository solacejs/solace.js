"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeamMember_1 = __importDefault(require("./TeamMember"));
class Team {
    constructor(data) {
        this.icon = data.icon;
        this.id = data.id;
        this.members = data.members.map((member) => new TeamMember_1.default(member));
        this.name = data.name;
        this.ownerUserId = data.owner_user_id;
    }
}
exports.default = Team;
