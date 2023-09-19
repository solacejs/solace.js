import IUser from "./IUser";

export default interface ITeam {
    icon: string | null;
    id: string;
    members: ITeamMember[];
    name: string;
    owner_user_id: string;
}

export interface ITeamMember {
    membership_state: number;
    team_id: string;
    user: IUser;
    role: string;
}