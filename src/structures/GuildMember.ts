import { ApiGuildMember } from "../interfaces/ApiGuildMember";
import { User } from "./User";

/**
 * Represents a member of a guild.
 */
export class GuildMember {

    /**
     * The avatar image URL of the member, or null if not provided.
     * @type {string | null}
     */
    public avatar: string | null;

    /**
     * The date and time when communication is disabled until for the member, or null if not provided.
     * @type {string | null}
     */
    public communicationDisabledUntil: string | null;

    /**
     * Indicates whether the member is deafened in voice channels.
     * @type {boolean}
     */
    public deaf: boolean;

    /**
     * The member's flags.
     * @type {number}
     */
    public flags: number;

    /**
     * The date and time when the member joined the guild.
     * @type {string}
     */
    public joinedAt: string;

    /**
     * Indicates whether the member is muted in voice channels.
     * @type {boolean}
     */
    public mute: boolean;

    /**
     * The nickname of the member, or null if not provided.
     * @type {string | null}
     */
    public nick: string | null;

    /**
     * Indicates whether the member is pending membership approval.
     * @type {boolean}
     */
    public pending: boolean;

    /**
     * The permissions of the member, or null if not provided.
     * @type {string | null}
     */
    public permissions: string | null;

    /**
     * The date and time when the member boosted the server (Nitro Boost), or null if not provided.
     * @type {string | null}
     */
    public premiumSince: string | null;

    /**
     * An array of role IDs that the member has.
     * @type {string[]}
     */
    public roles: string[];

    /**
     * The user associated with this member, or null if not provided.
     * @type {User | null}
     */
    public user: User | null;

    /**
     * Creates a new GuildMember instance.
     * @param {ApiGuildMember} data - The data object containing member information.
     */
    constructor(data: ApiGuildMember) {
        this.avatar = data.avatar ?? null;
        this.communicationDisabledUntil = data.communication_disabled_until ?? null;
        this.deaf = data.deaf;
        this.flags = data.flags;
        this.joinedAt = data.joined_at;
        this.mute = data.mute;
        this.nick = data.nick ?? null;
        this.pending = !!data.pending;
        this.permissions = data.permissions ?? null;
        this.premiumSince = data.premium_since ?? null;
        this.roles = data.roles;
        this.user = data.user ? new User(data.user) : null;
    }
}