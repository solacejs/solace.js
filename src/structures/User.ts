import IUser from "../interfaces/ApiUser";

/**
 * Represents a user on Discord.
 */
export default class User {

    /**
     * The user's base 10 accent color.
     */
    public accentColor: number | null;

    /**
     * The user's avatar hash.
     */
    public avatar: string | null;

    /**
     * The user's avatar decoration hash.
     */
    public avatarDecoration: string | null;

    /**
     * The user's banner hash.
     */
    public banner: string | null;

    /**
     * Indicates whether the user is a bot.
     */
    public bot: boolean;

    /**
     * The user's discriminator.
     */
    public discriminator: string;

    /**
     * The user's email address.
     */
    public email: string | null;

    /**
     * The user's flags.
     */
    public flags: number | null;

    /**
     * The user's global name.
     */
    public globalName: string | null;

    /**
     * The user's id.
     */
    public id: string;

    /**
     * The user's preferred locale.
     */
    public locale: string | null;

    /**
     * Indicates whether multi-factor authentication (MFA) is enabled for the user.
     */
    public mfaEnabled: boolean;

    /**
     * The user's premium type.
     */
    public premiumType: number | null;

    /**
     * The user's public flags.
     */
    public publicFlags: number | null;

    /**
     * Indicates whether the user is a system user.
     */
    public system: boolean;

    /**
     * The user's username.
     */
    public username: string;

    /**
     * Indicates whether the user is verified.
     */
    public verified: boolean;

    /**
     * Constructs a new User instance.
     * @param {IUser} data - The user data.
     */
    constructor(data: IUser) {
        this.accentColor = data.accent_color ?? null;
        this.avatar = data.avatar;
        this.avatarDecoration = data.avatar_decoration ?? null;
        this.banner = data.banner ?? null;
        this.bot = !!data.bot;
        this.discriminator = data.discriminator;
        this.email = data.email ?? null;
        this.flags = data.flags ?? null;
        this.globalName = data.global_name;
        this.id = data.id;
        this.locale = data.locale ?? null;
        this.mfaEnabled = !!data.mfa_enabled;
        this.premiumType = data.premium_type ?? null;
        this.publicFlags = data.public_flags ?? null;
        this.system = !!data.system;
        this.username = data.username;
        this.verified = !!data.verified;
    }
}
