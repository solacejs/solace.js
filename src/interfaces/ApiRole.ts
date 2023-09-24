/**
 * Represents the structure of a role.
 */
export interface ApiRole {
    /**
     * The color of the role.
     */
    color: number;

    /**
     * Flags associated with the role.
     */
    flags: number;

    /**
     * Whether the role is hoisted (displayed separately in the member list).
     */
    hoist: boolean;

    /**
     * The icon URL of the role.
     */
    icon?: string | null;

    /**
     * The unique identifier (ID) of the role.
     */
    id: string;

    /**
     * Indicates whether the role is managed by an integration or bot.
     */
    managed: boolean;

    /**
     * Indicates whether the role is mentionable by members.
     */
    mentionable: boolean;

    /**
     * The name of the role.
     */
    name: string;

    /**
     * The permissions granted by the role.
     */
    permissions: string;

    /**
     * The position of the role in the hierarchy.
     */
    position: number;

    /**
     * Additional tags associated with the role.
     */
    tags?: ApiRoleTag[];

    /**
     * The Unicode emoji associated with the role.
     */
    unicode_emoji?: string | null;
}

/**
 * Represents the structure of additional tags associated with a role.
 */
export interface ApiRoleTag {
    /**
     * Whether the role is available for purchase.
     */
    available_for_purchase?: null;

    /**
     * The ID of the bot associated with the role (if applicable).
     */
    bot_id?: string;

    /**
     * Guild connections associated with the role.
     */
    guild_connections?: null;

    /**
     * The integration ID associated with the role (if applicable).
     */
    integration_id?: string;

    /**
     * Whether the role is associated with a premium subscriber.
     */
    premium_subscriber?: null;

    /**
     * The subscription listing ID for the role (if applicable).
     */
    subscription_listing_id?: string;
}

/**
 * Represents the structure of subscription data associated with a role.
 */
export interface ApiRoleSubscriptionData {
    /**
     * Indicates whether the role subscription is a renewal.
     */
    is_renewal: boolean;

    /**
     * The role subscription listing ID.
     */
    role_subscription_listing_id: string;

    /**
     * The name of the subscription tier.
     */
    tier_name: string;

    /**
     * The total number of months subscribed to the role.
     */
    total_months_subscribed: number;
}
