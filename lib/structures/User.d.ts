import { Client } from "../client/Client";
import { ApiUser } from "../interfaces/ApiUser";
/**
 * Represents a user.
 */
export declare class User {
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
     * Instance of the client.
     */
    client: Client;
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
     * @param {ApiUser} data - The user data.
     */
    constructor(data: ApiUser);
    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param status - The status you want the bot to have.
     */
    setStatus(status: "online" | "dnd" | "idle" | "invisible" | "offline"): void;
    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param username - The username you want the bot to have.
     */
    setUsername(username: string): Promise<void>;
    setAvatar(avatar: string): Promise<void>;
}
