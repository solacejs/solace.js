import IGuildMember from "./IGuildMember";
import IUser from "./IUser";

export default interface IInteraction {
    id: string;
    type: IInteractionType;
    name: string;
    user: IUser;
    member?: IGuildMember;
}

export type IInteractionType = 1 | 2 | 3 | 4 | 5;