import IUser from "../interfaces/ApiUser";
/**
 * Represents a user on Discord.
 */
export default class User {
    /**
     * The user's base 10 accent color.
     */
    accentColor: number | null;
    /**
     * The user's avatar hash.
     */
    avatar: string | null;
    /**
     * The user's avatar decoration hash.
     */
    avatarDecoration: string | null;
    /**
     * The user's banner hash.
     */
    banner: string | null;
    /**
     * Indicates whether the user is a bot.
     */
    bot: boolean;
    /**
     * The user's discriminator.
     */
    discriminator: string;
    /**
     * The user's email address.
     */
    email: string | null;
    /**
     * The user's flags.
     */
    flags: number | null;
    /**
     * The user's global name.
     */
    globalName: string | null;
    /**
     * The user's id.
     */
    id: string;
    /**
     * The user's preferred locale.
     */
    locale: string | null;
    /**
     * Indicates whether multi-factor authentication (MFA) is enabled for the user.
     */
    mfaEnabled: boolean;
    /**
     * The user's premium type.
     */
    premiumType: number | null;
    /**
     * The user's public flags.
     */
    publicFlags: number | null;
    /**
     * Indicates whether the user is a system user.
     */
    system: boolean;
    /**
     * The user's username.
     */
    username: string;
    /**
     * Indicates whether the user is verified.
     */
    verified: boolean;
    /**
     * Constructs a new User instance.
     * @param {IUser} data - The user data.
     */
    constructor(data: IUser);
}
