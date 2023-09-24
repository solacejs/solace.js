import IInteraction from "../interfaces/ApiInteraction";
import GuildMember from "./GuildMember";
import User from "./User";

export default class Interaction {
    
    public id: string;
    public member: GuildMember | null;
    public name: string;
    public type: number;
    public user: User | null;

    constructor(data: IInteraction) {
        this.id = data.id;
        this.member = data.member ? new GuildMember(data.member) : null;
        this.name = data.name;
        this.type = data.type;
        this.user = data.user ? new User(data.user) : null;
    }
}