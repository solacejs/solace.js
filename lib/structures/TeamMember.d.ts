import { ApiTeamMember } from "../interfaces/ApiTeam";
import User from "./User";
export default class TeamMember {
    membershipState: number;
    teamId: string;
    user: User;
    role: string;
    constructor(data: ApiTeamMember);
}
