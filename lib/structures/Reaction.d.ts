import IReaction, { ApiReactionCountDetails } from "../interfaces/ApiReaction";
import { ApiRoleSubscriptionData } from "../interfaces/ApiRole";
import Emoji from "./Emoji";
export default class Reaction {
    count: number;
    countDetails: ReactionCountDetails;
    me: boolean;
    meBurst: boolean;
    emoji: Emoji;
    burstColors: number[];
    constructor(data: IReaction);
}
export declare class ReactionCountDetails {
    burst: number;
    normal: number;
    constructor(data: ApiReactionCountDetails);
}
export declare class RoleSubscriptionData {
    isRenewal: boolean;
    roleSubscriptionListingId: string;
    tierName: string;
    totalMonthsSubscribed: number;
    constructor(data: ApiRoleSubscriptionData);
}
