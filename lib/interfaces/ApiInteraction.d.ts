import ApiGuildMember from "./ApiGuildMember";
import ApiUser from "./ApiUser";
export default interface ApiInteraction {
    id: string;
    type: ApiInteractionType;
    name: string;
    user: ApiUser;
    member?: ApiGuildMember;
}
export type ApiInteractionType = 1 | 2 | 3 | 4 | 5;
