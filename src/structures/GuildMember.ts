import IGuildMember from "../interfaces/IGuildMember";
import User from "./User";

export default class GuildMember {
    
    public avatar: string | null;
    public communicationDisabledUntil: string | null;
    public deaf: boolean;
    public flags: number;
    public joinedAt: string;
    public mute: boolean;
    public nick: string | null;
    public pending: boolean;
    public permissions: string | null;
    public premiumSince: string | null;
    public roles: string[];
    public user: User | null;

    constructor(data: IGuildMember) {
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