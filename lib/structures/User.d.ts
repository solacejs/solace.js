export default class User {
    accentColor: number | null;
    avatar: string | null;
    avatarDecoration: string | null;
    banner: string | null;
    bot: boolean;
    discriminator: string;
    email: string | null;
    flags: number | null;
    globalName: string | null;
    id: string;
    locale: string | null;
    mfaEnabled: boolean;
    premiumType: number | null;
    publicFlags: number | null;
    system: boolean;
    username: string;
    verified: boolean;
    constructor(data: any);
}
