"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const TeamMember_1 = require("./TeamMember");
/**
 * Represents a team.
 */
class Team {
    /**
     * Creates a new Team instance.
     * @param {ApiTeam} data - The data object containing team information.
     */
    constructor(data) {
        this.icon = data.icon;
        this.id = data.id;
        this.members = data.members.map((member) => new TeamMember_1.TeamMember(member));
        this.name = data.name;
        this.ownerUserId = data.owner_user_id;
    }
}
exports.Team = Team;
