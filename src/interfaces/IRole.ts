export default interface IRole {
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
    tags?: IRoleTag[];
    flags: number;
}

export interface IRoleTag {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
    subscription_listing_id?: string;
    available_for_purchase?: null;
    guild_connections?: null;
}

export interface IRoleSubscriptionData {
    is_renewal: boolean;
    role_subscription_listing_id: string;
    tier_name: string;
    total_months_subscribed: number;
}