import { ApiTeam } from "../interfaces/ApiTeam";
import { TeamMember } from "./TeamMember";

/**
 * Represents a team.
 */
export class Team {
    
    /**
     * The icon URL of the team, or null if not provided.
     * @type {string | null}
     */
    public icon: string | null;

    /**
     * The unique ID of the team.
     * @type {string}
     */
    public id: string;

    /**
     * An array of team members.
     * @type {TeamMember[]}
     */
    public members: TeamMember[];

    /**
     * The name of the team.
     * @type {string}
     */
    public name: string;

    /**
     * The unique ID of the owner user of the team.
     * @type {string}
     */
    public ownerUserId: string;

    /**
     * Creates a new Team instance.
     * @param {ApiTeam} data - The data object containing team information.
     */
    constructor(data: ApiTeam) {
        this.icon = data.icon;
        this.id = data.id;
        this.members = data.members.map((member) => new TeamMember(member));
        this.name = data.name;
        this.ownerUserId = data.owner_user_id;
    }
}