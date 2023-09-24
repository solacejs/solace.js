import ApiEmoji from "./ApiEmoji";
export default interface ApiReaction {
    count: number;
    count_details: ApiReactionCountDetails;
    me: boolean;
    me_burst: boolean;
    emoji: ApiEmoji;
    burst_colors: number[];
}
export interface ApiReactionCountDetails {
    burst: number;
    normal: number;
}
