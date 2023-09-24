import { ApiTeam } from "../interfaces/ApiTeam";
import { TeamMember } from "./TeamMember";
/**
 * Represents a team.
 */
export declare class Team {
    /**
     * The icon URL of the team, or null if not provided.
     * @type {string | null}
     */
    icon: string | null;
    /**
     * The unique ID of the team.
     * @type {string}
     */
    id: string;
    /**
     * An array of team members.
     * @type {TeamMember[]}
     */
    members: TeamMember[];
    /**
     * The name of the team.
     * @type {string}
     */
    name: string;
    /**
     * The unique ID of the owner user of the team.
     * @type {string}
     */
    ownerUserId: string;
    /**
     * Creates a new Team instance.
     * @param {ApiTeam} data - The data object containing team information.
     */
    constructor(data: ApiTeam);
}
