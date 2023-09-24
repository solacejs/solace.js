"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSubscriptionData = exports.ReactionCountDetails = void 0;
const Emoji_1 = __importDefault(require("./Emoji"));
class Reaction {
    constructor(data) {
        this.count = data.count;
        this.countDetails = new ReactionCountDetails(data.count_details);
        this.me = data.me;
        this.meBurst = data.me_burst;
        this.emoji = new Emoji_1.default(data.emoji);
        this.burstColors = data.burst_colors;
    }
}
exports.default = Reaction;
class ReactionCountDetails {
    constructor(data) {
        this.burst = data.burst;
        this.normal = data.normal;
    }
}
exports.ReactionCountDetails = ReactionCountDetails;
class RoleSubscriptionData {
    constructor(data) {
        this.isRenewal = data.is_renewal;
        this.roleSubscriptionListingId = data.role_subscription_listing_id;
        this.tierName = data.tier_name;
        this.totalMonthsSubscribed = data.total_months_subscribed;
    }
}
exports.RoleSubscriptionData = RoleSubscriptionData;
