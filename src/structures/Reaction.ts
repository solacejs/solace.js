import IReaction, { IReactionCountDetails } from "../interfaces/IReaction";
import { IRoleSubscriptionData } from "../interfaces/IRole";
import Emoji from "./Emoji";

export default class Reaction {
    
    public count: number;
    public countDetails: ReactionCountDetails;
    public me: boolean;
    public meBurst: boolean;
    public emoji: Emoji;
    public burstColors: number[];

    constructor(data: IReaction) {
        this.count = data.count;
        this.countDetails = new ReactionCountDetails(data.count_details);
        this.me = data.me;
        this.meBurst = data.me_burst;
        this.emoji = new Emoji(data.emoji);
        this.burstColors = data.burst_colors;
    }
}

export class ReactionCountDetails {
    
    public burst: number;
    public normal: number;
    
    constructor(data: IReactionCountDetails) {
        this.burst = data.burst;
        this.normal = data.normal;
    }
}

export class RoleSubscriptionData {
    
    public isRenewal: boolean;
    public roleSubscriptionListingId: string;
    public tierName: string;
    public totalMonthsSubscribed: number;

    constructor(data: IRoleSubscriptionData) {
        this.isRenewal = data.is_renewal;
        this.roleSubscriptionListingId = data.role_subscription_listing_id;
        this.tierName = data.tier_name;
        this.totalMonthsSubscribed = data.total_months_subscribed;
    }
}