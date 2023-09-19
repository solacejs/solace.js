import ITeam from "../interfaces/ITeam";
import TeamMember from "./TeamMember";

export default class Team {
    
    public icon: string | null;
    public id: string;
    public members: TeamMember[];
    public name: string;
    public ownerUserId: string;

    constructor(data: ITeam) {
        this.icon = data.icon;
        this.id = data.id;
        this.members = data.members.map((member) => new TeamMember(member));
        this.name = data.name;
        this.ownerUserId = data.owner_user_id;
    }
}