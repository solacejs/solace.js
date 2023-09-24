"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class TeamMember {
    constructor(data) {
        this.membershipState = data.membership_state;
        this.teamId = data.team_id;
        this.user = new User_1.default(data.user);
        this.role = data.role;
    }
}
exports.default = TeamMember;
