import IUser from "./IUser";

export default interface ISticker {
    asset?: string;
    available?: boolean;
    description: string | null;
    format_type: number;
    guild_id?: string;
    id: string;
    name: string;
    pack_id?: string;
    sort_value?: number;
    tags: string;
    type: number;
    user?: IUser;
}

export interface IStickerItem {
    format_type: number;
    id: string;
    name: string;
}