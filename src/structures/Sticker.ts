import ISticker, { IStickerItem } from "../interfaces/ISticker";
import User from "./User";

export default class Sticker {
    
    public asset: string | null;
    public available: boolean;
    public description: string | null;
    public formatType: number;
    public guildId: string | null;
    public id: string;
    public name: string;
    public packId: string | null;
    public sortValue: number | null;
    public tags: string;
    public type: number;
    public user: User | null;

    constructor(data: ISticker) {
        this.asset = data.asset ?? null;
        this.available = !!data.available;
        this.description = data.description;
        this.formatType = data.format_type;
        this.guildId = data.guild_id ?? null;
        this.id = data.id;
        this.name = data.name;
        this.packId = data.pack_id ?? null;
        this.sortValue = data.sort_value ?? null;
        this.tags = data.tags;
        this.type = data.type;
        this.user = data.user ? new User(data.user) : null;
    }
}

export class StickerItem {
    
    public formatType: number;
    public id: string;
    public name: string;

    constructor(data: IStickerItem) {
        this.formatType = data.format_type;
        this.id = data.id;
        this.name = data.name;
    }
}