import { ApiTeamMember } from "../interfaces/ApiTeam";
import { User } from "./User";

/**
 * Represents a member of a team.
 */
export class TeamMember {
    
    /**
     * The membership state of the team member.
     * @type {number}
     */
    public membershipState: number;

    /**
     * The role of the team member.
     * @type {string}
     */
    public role: string;

    /**
     * The unique ID of the team to which the member belongs.
     * @type {string}
     */
    public teamId: string;

    /**
     * The user who is a member of the team.
     * @type {User}
     */
    public user: User;

    /**
     * Creates a new TeamMember instance.
     * @param {ApiTeamMember} data - The data object containing team member information.
     */
    constructor(data: ApiTeamMember) {
        this.membershipState = data.membership_state;
        this.role = data.role;
        this.teamId = data.team_id;
        this.user = new User(data.user);
    }
}
