import { ApiTeamMember } from "../interfaces/ApiTeam";
import { User } from "./User";
/**
 * Represents a member of a team.
 */
export declare class TeamMember {
    /**
     * The membership state of the team member.
     * @type {number}
     */
    membershipState: number;
    /**
     * The role of the team member.
     * @type {string}
     */
    role: string;
    /**
     * The unique ID of the team to which the member belongs.
     * @type {string}
     */
    teamId: string;
    /**
     * The user who is a member of the team.
     * @type {User}
     */
    user: User;
    /**
     * Creates a new TeamMember instance.
     * @param {ApiTeamMember} data - The data object containing team member information.
     */
    constructor(data: ApiTeamMember);
}
