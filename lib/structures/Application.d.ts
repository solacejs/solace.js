import IApplication, { ApiApplicationInstallParams } from "../interfaces/ApiApplication";
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
    constructor(data: IApplication);
}
export declare class ApplicationInstallParams {
    permissions: string;
    scopes: string[];
    constructor(data: ApiApplicationInstallParams);
}
