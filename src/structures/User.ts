export default class User {

    public accentColor: number | null;
    public avatar: string | null;
    public avatarDecoration: string | null;
    public banner: string | null;
    public bot: boolean;
    public discriminator: string;
    public email: string | null;
    public flags: number | null;
    public globalName: string | null;
    public id: string;
    public locale: string | null;
    public mfaEnabled: boolean;
    public premiumType: number | null;
    public publicFlags: number | null;
    public system: boolean;
    public username: string;
    public verified: boolean;

    constructor(data: any) {
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