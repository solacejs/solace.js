import IEmoji from "./IEmoji";

export default interface IReaction {
    count: number;
    count_details: IReactionCountDetails;
    me: boolean;
    me_burst: boolean;
    emoji: IEmoji;
    burst_colors: number[];
}

export interface IReactionCountDetails {
    burst: number;
    normal: number;
}