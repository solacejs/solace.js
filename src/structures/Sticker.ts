import { 
    ApiSticker, 
    ApiStickerItem 
} from "../interfaces/ApiSticker";
import { User } from "./User";

/**
 * Represents a sticker.
 */
export class Sticker {
    
    /**
     * The asset URL of the sticker, or null if not provided.
     * @type {string | null}
     */
    public asset: string | null;

    /**
     * Indicates whether the sticker is available.
     * @type {boolean}
     */
    public available: boolean;

    /**
     * The description of the sticker, or null if not provided.
     * @type {string | null}
     */
    public description: string | null;

    /**
     * The format type of the sticker.
     * @type {number}
     */
    public formatType: number;

    /**
     * The ID of the guild to which the sticker belongs, or null if not provided.
     * @type {string | null}
     */
    public guildId: string | null;

    /**
     * The unique ID of the sticker.
     * @type {string}
     */
    public id: string;

    /**
     * The name of the sticker.
     * @type {string}
     */
    public name: string;

    /**
     * The ID of the sticker pack to which the sticker belongs, or null if not provided.
     * @type {string | null}
     */
    public packId: string | null;

    /**
     * The sort value of the sticker, or null if not provided.
     * @type {number | null}
     */
    public sortValue: number | null;

    /**
     * The tags associated with the sticker.
     * @type {string}
     */
    public tags: string;

    /**
     * The type of the sticker.
     * @type {number}
     */
    public type: number;

    /**
     * The user who created the sticker, or null if not provided.
     * @type {User | null}
     */
    public user: User | null;

    /**
     * Creates a new Sticker instance.
     * @param {ApiSticker} data - The data object containing sticker information.
     */
    constructor(data: ApiSticker) {
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

/**
 * Represents an item of a sticker pack.
 */
export class StickerItem {
    
    /**
     * The format type of the sticker item.
     * @type {number}
     */
    public formatType: number;

    /**
     * The unique ID of the sticker item.
     * @type {string}
     */
    public id: string;

    /**
     * The name of the sticker item.
     * @type {string}
     */
    public name: string;

    /**
     * Creates a new StickerItem instance.
     * @param {ApiStickerItem} data - The data object containing sticker item information.
     */
    constructor(data: ApiStickerItem) {
        this.formatType = data.format_type;
        this.id = data.id;
        this.name = data.name;
    }
}
