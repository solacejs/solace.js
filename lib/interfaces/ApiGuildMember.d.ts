import { ApiUser } from "./ApiUser";
/**
 * Represents the structure of a member of a guild (server).
 */
export interface ApiGuildMember {
    /**
     * The avatar URL of the guild member, or null if the member has no avatar.
     */
    avatar?: string | null;
    /**
     * The timestamp until which the communication is disabled for this member, or null if not disabled.
     */
    communication_disabled_until?: string | null;
    /**
     * Indicates whether the member is deafened in voice channels.
     */
    deaf: boolean;
    /**
     * The member's flags.
     */
    flags: number;
    /**
     * The timestamp when the member joined the guild.
     */
    joined_at: string;
    /**
     * Indicates whether the member is muted in voice channels.
     */
    mute: boolean;
    /**
     * The nickname (nick) of the member within the guild, or null if not set.
     */
    nick?: string | null;
    /**
     * Indicates whether the member is pending, typically for members who have not accepted an invite.
     */
    pending?: boolean;
    /**
     * The permissions granted to the member, represented as a string.
     */
    permissions?: string;
    /**
     * The timestamp when the member received premium benefits, or null if not a premium member.
     */
    premium_since?: string | null;
    /**
     * An array of role IDs representing the roles assigned to the member.
     */
    roles: string[];
    /**
     * Information about the user associated with this guild member, or null if not provided.
     */
    user?: ApiUser;
}
