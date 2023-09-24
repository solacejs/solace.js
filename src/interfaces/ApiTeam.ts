import IUser from "./ApiUser";

export default interface ApiTeam {
    icon: string | null;
    id: string;
    members: ApiTeamMember[];
    name: string;
    owner_user_id: string;
}

export interface ApiTeamMember {
    membership_state: number;
    team_id: string;
    user: IUser;
    role: string;
}