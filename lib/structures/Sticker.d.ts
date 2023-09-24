import { ApiSticker, ApiStickerItem } from "../interfaces/ApiSticker";
import { User } from "./User";
/**
 * Represents a sticker.
 */
export declare class Sticker {
    /**
     * The asset URL of the sticker, or null if not provided.
     * @type {string | null}
     */
    asset: string | null;
    /**
     * Indicates whether the sticker is available.
     * @type {boolean}
     */
    available: boolean;
    /**
     * The description of the sticker, or null if not provided.
     * @type {string | null}
     */
    description: string | null;
    /**
     * The format type of the sticker.
     * @type {number}
     */
    formatType: number;
    /**
     * The ID of the guild to which the sticker belongs, or null if not provided.
     * @type {string | null}
     */
    guildId: string | null;
    /**
     * The unique ID of the sticker.
     * @type {string}
     */
    id: string;
    /**
     * The name of the sticker.
     * @type {string}
     */
    name: string;
    /**
     * The ID of the sticker pack to which the sticker belongs, or null if not provided.
     * @type {string | null}
     */
    packId: string | null;
    /**
     * The sort value of the sticker, or null if not provided.
     * @type {number | null}
     */
    sortValue: number | null;
    /**
     * The tags associated with the sticker.
     * @type {string}
     */
    tags: string;
    /**
     * The type of the sticker.
     * @type {number}
     */
    type: number;
    /**
     * The user who created the sticker, or null if not provided.
     * @type {User | null}
     */
    user: User | null;
    /**
     * Creates a new Sticker instance.
     * @param {ApiSticker} data - The data object containing sticker information.
     */
    constructor(data: ApiSticker);
}
/**
 * Represents an item of a sticker pack.
 */
export declare class StickerItem {
    /**
     * The format type of the sticker item.
     * @type {number}
     */
    formatType: number;
    /**
     * The unique ID of the sticker item.
     * @type {string}
     */
    id: string;
    /**
     * The name of the sticker item.
     * @type {string}
     */
    name: string;
    /**
     * Creates a new StickerItem instance.
     * @param {ApiStickerItem} data - The data object containing sticker item information.
     */
    constructor(data: ApiStickerItem);
}
