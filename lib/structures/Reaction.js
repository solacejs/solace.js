"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSubscriptionData = exports.ReactionCountDetails = exports.Reaction = void 0;
const Emoji_1 = require("./Emoji");
/**
 * Represents a reaction.
 */
class Reaction {
    /**
     * Creates a new Reaction instance.
     * @param {ApiReaction} data - The data object containing reaction information.
     */
    constructor(data) {
        this.count = data.count;
        this.countDetails = new ReactionCountDetails(data.count_details);
        this.me = data.me;
        this.meBurst = data.me_burst;
        this.emoji = new Emoji_1.Emoji(data.emoji);
        this.burstColors = data.burst_colors;
    }
}
exports.Reaction = Reaction;
/**
 * Represents details of the reaction count, including burst and normal counts.
 */
class ReactionCountDetails {
    /**
     * Creates a new ReactionCountDetails instance.
     * @param {ApiReactionCountDetails} data - The data object containing reaction count details.
     */
    constructor(data) {
        this.burst = data.burst;
        this.normal = data.normal;
    }
}
exports.ReactionCountDetails = ReactionCountDetails;
/**
 * Represents data related to role subscription.
 */
class RoleSubscriptionData {
    /**
     * Creates a new RoleSubscriptionData instance.
     * @param {ApiRoleSubscriptionData} data - The data object containing role subscription information.
     */
    constructor(data) {
        this.isRenewal = data.is_renewal;
        this.roleSubscriptionListingId = data.role_subscription_listing_id;
        this.tierName = data.tier_name;
        this.totalMonthsSubscribed = data.total_months_subscribed;
    }
}
exports.RoleSubscriptionData = RoleSubscriptionData;
