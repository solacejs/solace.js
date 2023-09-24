export default interface ApiRole {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: ApiRoleTag[];
    flags: number;
}

export interface ApiRoleTag {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
    subscription_listing_id?: string;
    available_for_purchase?: null;
    guild_connections?: null;
}

export interface ApiRoleSubscriptionData {
    is_renewal: boolean;
    role_subscription_listing_id: string;
    tier_name: string;
    total_months_subscribed: number;
}