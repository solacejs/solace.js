import IApplication, { IApplicationInstallParams } from "../interfaces/IApplication";
import Guild from "./Guild";
import Team from "./Team";
import User from "./User";

export default class Application {

    approximateGuildCount: number | null;
    botPublic: boolean;
    botRequireCodeGrant: boolean;
    coverImage: string | null;
    customInstallUrl: string | null;
    description: string;
    flags: number | null;
    guild: Guild | null;
    guildId: string | null;
    icon: string | null;
    id: string;
    installParams: ApplicationInstallParams | null;
    owner: User | null;
    privacyPolicyUrl: string | null;
    rpcOrigins: string[] | null;
    roleConnectionsVerificationUrl: string | null;
    slug: string | null;
    summary: string;
    tags: string[] | null;
    team: Team | null;
    termsOfServiceUrl: string | null;
    verifyKey: string;

    constructor(data: IApplication) {
        this.approximateGuildCount = data.approximate_guild_count ?? null;
        this.botPublic = data.bot_public;
        this.botRequireCodeGrant = data.bot_require_code_grant;
        this.coverImage = data.cover_image ?? null;
        this.customInstallUrl = data.custom_install_url ?? null;
        this.description = data.description;
        this.flags = data.flags ?? null;
        this.guild = data.guild ? new Guild(data.guild) : null;
        this.guildId = data.guild_id ?? null;
        this.icon = data.icon ?? null;
        this.id = data.id;
        this.installParams = data.install_params ? new ApplicationInstallParams(data.install_params) : null;
        this.owner = data.owner ? new User(data.owner) : null;;
        this.privacyPolicyUrl = data.privacy_policy_url ?? null;
        this.rpcOrigins = data.rpc_origins ?? null;
        this.roleConnectionsVerificationUrl = data.role_connections_verification_url ?? null;
        this.slug = data.slug ?? null;
        this.summary = data.summary;
        this.tags = data.tags ?? null;
        this.team = data.team ? new Team(data.team) : null;
        this.termsOfServiceUrl = data.terms_of_service_url ?? null;
        this.verifyKey = data.verify_key;
    }
}

export class ApplicationInstallParams {

    public permissions: string;
    public scopes: string[];

    constructor(data: IApplicationInstallParams) {
        this.permissions = data.permissions;
        this.scopes = data.scopes;
    }
}