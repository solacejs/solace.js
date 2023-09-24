import { ApiReaction, ApiReactionCountDetails } from "../interfaces/ApiReaction";
import { ApiRoleSubscriptionData } from "../interfaces/ApiRole";
import { Emoji } from "./Emoji";
/**
 * Represents a reaction.
 */
export declare class Reaction {
    /**
     * The total count of reactions.
     * @type {number}
     */
    count: number;
    /**
     * Details of the reaction count, including burst and normal counts.
     * @type {ReactionCountDetails}
     */
    countDetails: ReactionCountDetails;
    /**
     * Indicates whether the current user has reacted with this emoji.
     * @type {boolean}
     */
    me: boolean;
    /**
     * Indicates whether the current user has burst-reacted with this emoji.
     * @type {boolean}
     */
    meBurst: boolean;
    /**
     * The emoji associated with the reaction.
     * @type {Emoji}
     */
    emoji: Emoji;
    /**
     * An array of burst colors for the reaction.
     * @type {number[]}
     */
    burstColors: number[];
    /**
     * Creates a new Reaction instance.
     * @param {ApiReaction} data - The data object containing reaction information.
     */
    constructor(data: ApiReaction);
}
/**
 * Represents details of the reaction count, including burst and normal counts.
 */
export declare class ReactionCountDetails {
    /**
     * The count of burst reactions.
     * @type {number}
     */
    burst: number;
    /**
     * The count of normal reactions.
     * @type {number}
     */
    normal: number;
    /**
     * Creates a new ReactionCountDetails instance.
     * @param {ApiReactionCountDetails} data - The data object containing reaction count details.
     */
    constructor(data: ApiReactionCountDetails);
}
/**
 * Represents data related to role subscription.
 */
export declare class RoleSubscriptionData {
    /**
     * Indicates whether the subscription is a renewal.
     * @type {boolean}
     */
    isRenewal: boolean;
    /**
     * The ID of the role subscription listing.
     * @type {string}
     */
    roleSubscriptionListingId: string;
    /**
     * The name of the subscription tier.
     * @type {string}
     */
    tierName: string;
    /**
     * The total months subscribed.
     * @type {number}
     */
    totalMonthsSubscribed: number;
    /**
     * Creates a new RoleSubscriptionData instance.
     * @param {ApiRoleSubscriptionData} data - The data object containing role subscription information.
     */
    constructor(data: ApiRoleSubscriptionData);
}
