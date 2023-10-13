import { Client } from "../client/Client";
import { Constants } from "../config/Constants";
import { OpCodes } from "../config/OpCodes";
import { ApiUser } from "../interfaces/ApiUser";
import { Logger } from "../util/Logger";
import fs from 'fs/promises';
import path from "path";

/**
 * Represents a user.
 */
export class User {

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
     * Instance of the client.
     */
    public client: Client;
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
     * @param {ApiUser} data - The user data.
     */
    constructor(data: ApiUser) {
        this.accentColor = data.accent_color ?? null;
        this.avatar = data.avatar;
        this.avatarDecoration = data.avatar_decoration ?? null;
        this.banner = data.banner ?? null;
        this.bot = !!data.bot;
        this.client = data.client;
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

    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param status - The status you want the bot to have.
     */
    public setStatus(status: "online" | "dnd" | "idle" | "invisible" | "offline") {
        this.client.ws?.send({ op: OpCodes.PRESENCE_UPDATE, d: { since: null, activities: [], status, afk: false } });
    }

    /**
     * Set the status of the bot user. (CLIENT ONLY).
     * @param username - The username you want the bot to have.
     */
    public async setUsername(username: string) {
        try {
            const res = await fetch(`${Constants.API}/users/@me`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username
                })
            });

            if (!res.ok) Logger.error("Failed to change the bot's username, please try again later.")
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async setAvatar(avatar: string) {
        try {
            let setAvatar;
            if (avatar.startsWith('data:')) {
                setAvatar = avatar;
            } else if (/^https?:\/\//.test(avatar)) {
                const res = await fetch(avatar);
                const arr = avatar.split(".");
                setAvatar = `data:${arr[arr.length - 1]};base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
            } else {
                const file = path.resolve(avatar);
                const stats = await fs.stat(file);
                if (!stats.isFile()) return Logger.error("The avatar you have provided is not a file!");
                const arr = avatar.split(".");
                setAvatar = `data:${arr[arr.length - 1]};base64,${Buffer.from(await fs.readFile(file)).toString("base64")}`;
            }

            const res = await fetch(`${Constants.API}/users/@me`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bot ${this.client.options.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: setAvatar
                })
            });

            if (!res.ok) Logger.error("Failed to change the bot's avatar, please try again later.")
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}
