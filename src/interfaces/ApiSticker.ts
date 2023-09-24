import ApiUser from "./ApiUser";

export default interface ApiSticker {
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
    user?: ApiUser;
}

export interface ApiStickerItem {
    format_type: number;
    id: string;
    name: string;
}