import { ApiUser } from "./ApiUser";
/**
 * Represents the structure of a sticker.
 */
export interface ApiSticker {
    /**
     * The asset (image or animation) of the sticker.
     */
    asset?: string;
    /**
     * Indicates whether the sticker is available.
     */
    available?: boolean;
    /**
     * The description of the sticker.
     */
    description: string | null;
    /**
     * The format type of the sticker.
     */
    format_type: number;
    /**
     * The ID of the guild that the sticker belongs to (if applicable).
     */
    guild_id?: string;
    /**
     * The unique identifier (ID) of the sticker.
     */
    id: string;
    /**
     * The name of the sticker.
     */
    name: string;
    /**
     * The ID of the sticker pack that this sticker belongs to (if applicable).
     */
    pack_id?: string;
    /**
     * The sort value of the sticker.
     */
    sort_value?: number;
    /**
     * Tags associated with the sticker.
     */
    tags: string;
    /**
     * The type of the sticker.
     */
    type: number;
    /**
     * Information about the user who created the sticker (if applicable).
     */
    user?: ApiUser;
}
/**
 * Represents the structure of a sticker item.
 */
export interface ApiStickerItem {
    /**
     * The format type of the sticker item.
     */
    format_type: number;
    /**
     * The unique identifier (ID) of the sticker item.
     */
    id: string;
    /**
     * The name of the sticker item.
     */
    name: string;
}
