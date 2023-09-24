"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = void 0;
const User_1 = require("./User");
/**
 * Represents a member of a team.
 */
class TeamMember {
    /**
     * Creates a new TeamMember instance.
     * @param {ApiTeamMember} data - The data object containing team member information.
     */
    constructor(data) {
        this.membershipState = data.membership_state;
        this.role = data.role;
        this.teamId = data.team_id;
        this.user = new User_1.User(data.user);
    }
}
exports.TeamMember = TeamMember;
