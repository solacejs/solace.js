import IInteraction from "../interfaces/ApiInteraction";
import GuildMember from "./GuildMember";
import User from "./User";
export default class Interaction {
    id: string;
    member: GuildMember | null;
    name: string;
    type: number;
    user: User | null;
    constructor(data: IInteraction);
}
