import { ApiEmoji } from "../interfaces/ApiEmoji";
import { User } from "./User";

/**
 * Represents an emoji.
 */
export class Emoji {
    
    /**
     * Indicates whether the emoji is animated.
     * @type {boolean}
     */
    public animated: boolean;

    /**
     * Indicates whether the emoji is available.
     * @type {boolean}
     */
    public available: boolean;

    /**
     * The unique ID of the emoji, or null if not provided.
     * @type {string | null}
     */
    public id: string | null;

    /**
     * Indicates whether the emoji is managed.
     * @type {boolean}
     */
    public managed: boolean;

    /**
     * The name of the emoji, or null if not provided.
     * @type {string | null}
     */
    public name: string | null;

    /**
     * Indicates whether colons are required for this emoji in text representation.
     * @type {boolean}
     */
    public requireColons: boolean;

    /**
     * An array of role IDs that this emoji is associated with, or undefined if not provided.
     * @type {string[] | undefined}
     */
    public roles: string[] | undefined;

    /**
     * The user who created or added the emoji, or null if not provided.
     * @type {User | null}
     */
    public user: User | null;

    /**
     * Creates a new Emoji instance.
     * @param {ApiEmoji} data - The data object containing emoji information.
     */
    constructor(data: ApiEmoji) {
        this.animated = !!data.animated;
        this.available = !!data.available;
        this.id = data.id;
        this.managed = !!data.managed;
        this.name = data.name;
        this.requireColons = !!data.require_colons;
        this.roles = data.roles;
        this.user = data.user ? new User(data.user) : null;
    }
}
