import { ApiRole, ApiRoleTag } from "../interfaces/ApiRole";

/**
 * Represents a role within a guild or server.
 */
export class Role {

    /**
     * The color of the role.
     * @type {number}
     */
    public color: number;

    /**
     * The flags associated with the role.
     * @type {number}
     */
    public flags: number;

    /**
     * Indicates whether the role is hoisted.
     * @type {boolean}
     */
    public hoist: boolean;

    /**
     * The icon URL of the role, or null if not provided.
     * @type {string | null}
     */
    public icon: string | null;

    /**
     * The unique ID of the role.
     * @type {string}
     */
    public id: string;

    /**
     * Indicates whether the role is managed by an integration or bot.
     * @type {boolean}
     */
    public managed: boolean;

    /**
     * Indicates whether the role is mentionable.
     * @type {boolean}
     */
    public mentionable: boolean;

    /**
     * The name of the role.
     * @type {string}
     */
    public name: string;

    /**
     * The permissions of the role.
     * @type {string}
     */
    public permissions: string;

    /**
     * The position of the role in the hierarchy.
     * @type {number}
     */
    public position: number;

    /**
     * Tags associated with the role, or undefined if not provided.
     * @type {RoleTag | null}
     */
    public tags: RoleTag | null;

    /**
     * The Unicode emoji associated with the role, or null if not provided.
     * @type {string | null}
     */
    public unicodeEmoji: string | null;

    /**
     * Creates a new Role instance.
     * @param {ApiRole} data - The data object containing role information.
     */
    constructor(data: ApiRole) {
        this.color = data.color;
        this.flags = data.flags;
        this.hoist = data.hoist;
        this.icon = data.icon ?? null;
        this.id = data.id;
        this.managed = data.managed;
        this.mentionable = data.mentionable;
        this.name = data.name;
        this.permissions = data.permissions;
        this.position = data.position;
        this.tags = data.tags ? new RoleTag(data.tags) : null;
        this.unicodeEmoji = data.unicode_emoji ?? null;
    }
}

/**
 * Represents additional tags associated with a role.
 */
export class RoleTag {

    /**
     * Indicates whether the role is available for purchase.
     * @type {null}
     */
    public availableForPurchase: null;

    /**
     * The ID of the bot associated with the role, or null if not provided.
     * @type {string | null}
     */
    public botId: string | null;

    /**
     * The guild connections for the role, or null if not provided.
     * @type {null}
     */
    public guildConnections: null;

    /**
     * The integration ID associated with the role, or null if not provided.
     * @type {string | null}
     */
    public integrationId: string | null;

    /**
     * Indicates whether the role is for a premium subscriber, or null if not provided.
     * @type {null}
     */
    public premiumSubscriber: null;

    /**
     * The subscription listing ID associated with the role, or null if not provided.
     * @type {string | null}
     */
    public subscriptionListingId: string | null;

    /**
     * Creates a new RoleTag instance.
     * @param {ApiRoleTag} data - The data object containing role tag information.
     */
    constructor(data: ApiRoleTag) {
        this.availableForPurchase = data.available_for_purchase ?? null;
        this.botId = data.bot_id ?? null;
        this.guildConnections = data.guild_connections ?? null;
        this.integrationId = data.integration_id ?? null;
        this.premiumSubscriber = data.premium_subscriber ?? null;
        this.subscriptionListingId = data.subscription_listing_id ?? null;
    }
}