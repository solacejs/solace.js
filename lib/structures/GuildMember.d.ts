import { ApiGuildMember } from "../interfaces/ApiGuildMember";
import { User } from "./User";
/**
 * Represents a member of a guild.
 */
export declare class GuildMember {
    /**
     * The avatar image URL of the member, or null if not provided.
     * @type {string | null}
     */
    avatar: string | null;
    /**
     * The date and time when communication is disabled until for the member, or null if not provided.
     * @type {string | null}
     */
    communicationDisabledUntil: string | null;
    /**
     * Indicates whether the member is deafened in voice channels.
     * @type {boolean}
     */
    deaf: boolean;
    /**
     * The member's flags.
     * @type {number}
     */
    flags: number;
    /**
     * The date and time when the member joined the guild.
     * @type {string}
     */
    joinedAt: string;
    /**
     * Indicates whether the member is muted in voice channels.
     * @type {boolean}
     */
    mute: boolean;
    /**
     * The nickname of the member, or null if not provided.
     * @type {string | null}
     */
    nick: string | null;
    /**
     * Indicates whether the member is pending membership approval.
     * @type {boolean}
     */
    pending: boolean;
    /**
     * The permissions of the member, or null if not provided.
     * @type {string | null}
     */
    permissions: string | null;
    /**
     * The date and time when the member boosted the server (Nitro Boost), or null if not provided.
     * @type {string | null}
     */
    premiumSince: string | null;
    /**
     * An array of role IDs that the member has.
     * @type {string[]}
     */
    roles: string[];
    /**
     * The user associated with this member, or null if not provided.
     * @type {User | null}
     */
    user: User | null;
    /**
     * Creates a new GuildMember instance.
     * @param {ApiGuildMember} data - The data object containing member information.
     */
    constructor(data: ApiGuildMember);
}
