import IGuildMember from "../interfaces/ApiGuildMember";
import User from "./User";
export default class GuildMember {
    avatar: string | null;
    communicationDisabledUntil: string | null;
    deaf: boolean;
    flags: number;
    joinedAt: string;
    mute: boolean;
    nick: string | null;
    pending: boolean;
    permissions: string | null;
    premiumSince: string | null;
    roles: string[];
    user: User | null;
    constructor(data: IGuildMember);
}
