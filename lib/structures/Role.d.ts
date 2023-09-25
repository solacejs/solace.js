import { ApiRole, ApiRoleTag } from "../interfaces/ApiRole";
/**
 * Represents a role within a guild or server.
 */
export declare class Role {
    /**
     * The color of the role.
     * @type {number}
     */
    color: number;
    /**
     * The flags associated with the role.
     * @type {number}
     */
    flags: number;
    /**
     * Indicates whether the role is hoisted.
     * @type {boolean}
     */
    hoist: boolean;
    /**
     * The icon URL of the role, or null if not provided.
     * @type {string | null}
     */
    icon: string | null;
    /**
     * The unique ID of the role.
     * @type {string}
     */
    id: string;
    /**
     * Indicates whether the role is managed by an integration or bot.
     * @type {boolean}
     */
    managed: boolean;
    /**
     * Indicates whether the role is mentionable.
     * @type {boolean}
     */
    mentionable: boolean;
    /**
     * The name of the role.
     * @type {string}
     */
    name: string;
    /**
     * The permissions of the role.
     * @type {string}
     */
    permissions: string;
    /**
     * The position of the role in the hierarchy.
     * @type {number}
     */
    position: number;
    /**
     * Tags associated with the role, or undefined if not provided.
     * @type {RoleTag | null}
     */
    tags: RoleTag | null;
    /**
     * The Unicode emoji associated with the role, or null if not provided.
     * @type {string | null}
     */
    unicodeEmoji: string | null;
    /**
     * Creates a new Role instance.
     * @param {ApiRole} data - The data object containing role information.
     */
    constructor(data: ApiRole);
}
/**
 * Represents additional tags associated with a role.
 */
export declare class RoleTag {
    /**
     * Indicates whether the role is available for purchase.
     * @type {null}
     */
    availableForPurchase: null;
    /**
     * The ID of the bot associated with the role, or null if not provided.
     * @type {string | null}
     */
    botId: string | null;
    /**
     * The guild connections for the role, or null if not provided.
     * @type {null}
     */
    guildConnections: null;
    /**
     * The integration ID associated with the role, or null if not provided.
     * @type {string | null}
     */
    integrationId: string | null;
    /**
     * Indicates whether the role is for a premium subscriber, or null if not provided.
     * @type {null}
     */
    premiumSubscriber: null;
    /**
     * The subscription listing ID associated with the role, or null if not provided.
     * @type {string | null}
     */
    subscriptionListingId: string | null;
    /**
     * Creates a new RoleTag instance.
     * @param {ApiRoleTag} data - The data object containing role tag information.
     */
    constructor(data: ApiRoleTag);
}
