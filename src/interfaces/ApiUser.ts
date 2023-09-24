/**
 * Interface defining the structure of user data.
 */
export interface ApiUser {
    /**
     * The accent color associated with the user, if any.
     */
    accent_color?: number | null;

    /**
     * The URL of the user's avatar image, or null if not available.
     */
    avatar: string | null;

    /**
     * A decoration applied to the user's avatar, if any.
     */
    avatar_decoration?: string | null;

    /**
     * The URL of the user's banner image, if any.
     */
    banner?: string | null;

    /**
     * Indicates whether the user is a bot.
     */
    bot?: boolean;

    /**
     * The discriminator, a unique identifier within the user's username.
     */
    discriminator: string;

    /**
     * The user's email address, if available.
     */
    email?: string | null;

    /**
     * Flags associated with the user, if any.
     */
    flags?: number;

    /**
     * The global name of the user, if any.
     */
    global_name: string | null;

    /**
     * The unique identifier of the user.
     */
    id: string;

    /**
     * The user's preferred locale, such as language and region.
     */
    locale?: string;

    /**
     * Indicates whether multi-factor authentication (MFA) is enabled for the user, if applicable.
     */
    mfa_enabled?: boolean;

    /**
     * The type of premium subscription the user has, if any.
     */
    premium_type?: number;

    /**
     * Flags that indicate various user attributes and settings.
     */
    public_flags?: number;

    /**
     * Indicates whether the user is a system account.
     */
    system?: boolean;

    /**
     * The username of the user.
     */
    username: string;

    /**
     * Indicates whether the user's account is verified.
     */
    verified?: boolean;
}