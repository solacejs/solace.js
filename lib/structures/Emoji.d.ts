import { ApiEmoji } from "../interfaces/ApiEmoji";
import { User } from "./User";
/**
 * Represents an emoji.
 */
export declare class Emoji {
    /**
     * Indicates whether the emoji is animated.
     * @type {boolean}
     */
    animated: boolean;
    /**
     * Indicates whether the emoji is available.
     * @type {boolean}
     */
    available: boolean;
    /**
     * The unique ID of the emoji, or null if not provided.
     * @type {string | null}
     */
    id: string | null;
    /**
     * Indicates whether the emoji is managed.
     * @type {boolean}
     */
    managed: boolean;
    /**
     * The name of the emoji, or null if not provided.
     * @type {string | null}
     */
    name: string | null;
    /**
     * Indicates whether colons are required for this emoji in text representation.
     * @type {boolean}
     */
    requireColons: boolean;
    /**
     * An array of role IDs that this emoji is associated with, or undefined if not provided.
     * @type {string[] | undefined}
     */
    roles: string[] | undefined;
    /**
     * The user who created or added the emoji, or null if not provided.
     * @type {User | null}
     */
    user: User | null;
    /**
     * Creates a new Emoji instance.
     * @param {ApiEmoji} data - The data object containing emoji information.
     */
    constructor(data: ApiEmoji);
}
