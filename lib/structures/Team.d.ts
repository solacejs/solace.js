import ITeam from "../interfaces/ApiTeam";
import TeamMember from "./TeamMember";
export default class Team {
    icon: string | null;
    id: string;
    members: TeamMember[];
    name: string;
    ownerUserId: string;
    constructor(data: ITeam);
}
