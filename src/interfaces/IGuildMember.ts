import IUser from "./IUser";

export default interface IGuildMember {
    user?: IUser;
    nick?: string | null;
    avatar?: string | null;
    roles: string[];
    joined_at: string;
    premium_since?: string | null;
    deaf: boolean;
    mute: boolean;
    flags: number;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string | null;
}