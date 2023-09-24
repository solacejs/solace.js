import { ApiTeamMember } from "../interfaces/ApiTeam";
import User from "./User";

export default class TeamMember {
    
    public membershipState: number;
    public teamId: string;
    public user: User;
    public role: string;

    constructor(data: ApiTeamMember) {
        this.membershipState = data.membership_state;
        this.teamId = data.team_id;
        this.user = new User(data.user);
        this.role = data.role;
    }
}