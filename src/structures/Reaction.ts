import { 
    ApiReaction, 
    ApiReactionCountDetails 
} from "../interfaces/ApiReaction";
import { ApiRoleSubscriptionData } from "../interfaces/ApiRole";
import { Emoji } from "./Emoji";

/**
 * Represents a reaction.
 */
export class Reaction {
    
    /**
     * The total count of reactions.
     * @type {number}
     */
    public count: number;

    /**
     * Details of the reaction count, including burst and normal counts.
     * @type {ReactionCountDetails}
     */
    public countDetails: ReactionCountDetails;

    /**
     * Indicates whether the current user has reacted with this emoji.
     * @type {boolean}
     */
    public me: boolean;

    /**
     * Indicates whether the current user has burst-reacted with this emoji.
     * @type {boolean}
     */
    public meBurst: boolean;

    /**
     * The emoji associated with the reaction.
     * @type {Emoji}
     */
    public emoji: Emoji;

    /**
     * An array of burst colors for the reaction.
     * @type {number[]}
     */
    public burstColors: number[];

    /**
     * Creates a new Reaction instance.
     * @param {ApiReaction} data - The data object containing reaction information.
     */
    constructor(data: ApiReaction) {
        this.count = data.count;
        this.countDetails = new ReactionCountDetails(data.count_details);
        this.me = data.me;
        this.meBurst = data.me_burst;
        this.emoji = new Emoji(data.emoji);
        this.burstColors = data.burst_colors;
    }
}

/**
 * Represents details of the reaction count, including burst and normal counts.
 */
export class ReactionCountDetails {
    
    /**
     * The count of burst reactions.
     * @type {number}
     */
    public burst: number;

    /**
     * The count of normal reactions.
     * @type {number}
     */
    public normal: number;

    /**
     * Creates a new ReactionCountDetails instance.
     * @param {ApiReactionCountDetails} data - The data object containing reaction count details.
     */
    constructor(data: ApiReactionCountDetails) {
        this.burst = data.burst;
        this.normal = data.normal;
    }
}

/**
 * Represents data related to role subscription.
 */
export class RoleSubscriptionData {
    
    /**
     * Indicates whether the subscription is a renewal.
     * @type {boolean}
     */
    public isRenewal: boolean;

    /**
     * The ID of the role subscription listing.
     * @type {string}
     */
    public roleSubscriptionListingId: string;

    /**
     * The name of the subscription tier.
     * @type {string}
     */
    public tierName: string;

    /**
     * The total months subscribed.
     * @type {number}
     */
    public totalMonthsSubscribed: number;

    /**
     * Creates a new RoleSubscriptionData instance.
     * @param {ApiRoleSubscriptionData} data - The data object containing role subscription information.
     */
    constructor(data: ApiRoleSubscriptionData) {
        this.isRenewal = data.is_renewal;
        this.roleSubscriptionListingId = data.role_subscription_listing_id;
        this.tierName = data.tier_name;
        this.totalMonthsSubscribed = data.total_months_subscribed;
    }
}
