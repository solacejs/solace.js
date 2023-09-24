import { ApiUser } from "./ApiUser";

/**
 * Represents an emoji in an API response.
 */
export interface ApiEmoji {
    /**
     * Indicates whether the emoji is animated.
     */
    animated?: boolean;

    /**
     * Indicates whether the emoji is available.
     */
    available?: boolean;

    /**
     * The unique identifier of the emoji.
     */
    id: string | null;

    /**
     * Indicates whether the emoji is managed by an external service.
     */
    managed?: boolean;

    /**
     * The name of the emoji.
     */
    name: string | null;

    /**
     * Indicates whether colons are required to use the emoji.
     */
    require_colons?: boolean;

    /**
     * An array of role IDs that are allowed to use this emoji.
     */
    roles?: string[];

    /**
     * Information about the user who created the emoji.
     */
    user?: ApiUser;
}