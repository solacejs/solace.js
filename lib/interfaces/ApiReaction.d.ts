import { ApiEmoji } from "./ApiEmoji";
/**
 * Represents the structure of a reaction to a message.
 */
export interface ApiReaction {
    /**
     * The total count of this reaction.
     */
    count: number;
    /**
     * Details about the count of reactions, including burst and normal counts.
     */
    count_details: ApiReactionCountDetails;
    /**
     * Indicates whether the current user (the bot or user making the API request) has reacted with this emoji.
     */
    me: boolean;
    /**
     * Indicates whether the reaction was added in burst mode.
     */
    me_burst: boolean;
    /**
     * Information about the emoji used in this reaction.
     */
    emoji: ApiEmoji;
    /**
     * An array of burst colors associated with this reaction.
     */
    burst_colors: number[];
}
/**
 * Represents the count details of a reaction.
 */
export interface ApiReactionCountDetails {
    /**
     * The burst count of this reaction.
     */
    burst: number;
    /**
     * The normal count of this reaction.
     */
    normal: number;
}
