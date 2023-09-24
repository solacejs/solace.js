import ISticker, { ApiStickerItem } from "../interfaces/ApiSticker";
import User from "./User";
export default class Sticker {
    asset: string | null;
    available: boolean;
    description: string | null;
    formatType: number;
    guildId: string | null;
    id: string;
    name: string;
    packId: string | null;
    sortValue: number | null;
    tags: string;
    type: number;
    user: User | null;
    constructor(data: ISticker);
}
export declare class StickerItem {
    formatType: number;
    id: string;
    name: string;
    constructor(data: ApiStickerItem);
}
