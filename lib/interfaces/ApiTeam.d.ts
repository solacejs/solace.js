import { ApiUser } from "./ApiUser";
/**
 * Represents the structure of a team.
 */
export interface ApiTeam {
    /**
     * The icon of the team.
     */
    icon: string | null;
    /**
     * The unique identifier (ID) of the team.
     */
    id: string;
    /**
     * An array of team members.
     */
    members: ApiTeamMember[];
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The unique identifier (ID) of the owner user of the team.
     */
    owner_user_id: string;
}
/**
 * Represents the structure of a team member.
 */
export interface ApiTeamMember {
    /**
     * The membership state of the team member.
     */
    membership_state: number;
    /**
     * The role of the team member.
     */
    role: string;
    /**
     * The unique identifier (ID) of the team to which the member belongs.
     */
    team_id: string;
    /**
     * Information about the user who is a member of the team.
     */
    user: ApiUser;
}
