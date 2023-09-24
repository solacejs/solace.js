import { ApiApplication, ApiApplicationInstallParams } from "../interfaces/ApiApplication";
import { Guild } from "./Guild";
import { Team } from "./Team";
import { User } from "./User";
/**
 * Represents an application.
 */
export declare class Application {
    /**
     * The approximate number of guilds this application is in, or null if unknown.
     * @type {number | null}
     */
    approximateGuildCount: number | null;
    /**
     * Indicates whether the bot is publicly listed.
     * @type {boolean}
     */
    botPublic: boolean;
    /**
     * Indicates whether the bot requires code grant.
     * @type {boolean}
     */
    botRequireCodeGrant: boolean;
    /**
     * The URL of the cover image, or null if not provided.
     * @type {string | null}
     */
    coverImage: string | null;
    /**
     * The custom installation URL for the application, or null if not provided.
     * @type {string | null}
     */
    customInstallUrl: string | null;
    /**
     * The description of the application.
     * @type {string}
     */
    description: string;
    /**
     * Flags associated with the application, or null if not provided.
     * @type {number | null}
     */
    flags: number | null;
    /**
     * The guild associated with the application, or null if not applicable.
     * @type {Guild | null}
     */
    guild: Guild | null;
    /**
     * The ID of the guild associated with the application, or null if not applicable.
     * @type {string | null}
     */
    guildId: string | null;
    /**
     * The URL of the application's icon, or null if not provided.
     * @type {string | null}
     */
    icon: string | null;
    /**
     * The ID of the application.
     * @type {string}
     */
    id: string;
    /**
     * Installation parameters for the application, or null if not provided.
     * @type {ApplicationInstallParams | null}
     */
    installParams: ApplicationInstallParams | null;
    /**
     * The owner of the application, or null if not applicable.
     * @type {User | null}
     */
    owner: User | null;
    /**
     * The URL of the privacy policy of the application, or null if not provided.
     * @type {string | null}
     */
    privacyPolicyUrl: string | null;
    /**
     * Origins for RPC (Rich Presence) interactions, or null if not provided.
     * @type {string[]}
     */
    rpcOrigins: string[];
    /**
     * The URL used for role connections verification, or null if not provided.
     * @type {string | null}
     */
    roleConnectionsVerificationUrl: string | null;
    /**
     * The slug of the application, or null if not provided.
     * @type {string | null}
     */
    slug: string | null;
    /**
     * A summary of the application.
     * @type {string}
     */
    summary: string;
    /**
     * Tags associated with the application, or null if not provided.
     * @type {string[]}
     */
    tags: string[];
    /**
     * The team associated with the application, or null if not applicable.
     * @type {Team | null}
     */
    team: Team | null;
    /**
     * The URL of the terms of service of the application, or null if not provided.
     * @type {string | null}
     */
    termsOfServiceUrl: string | null;
    /**
     * The verification key of the application.
     * @type {string}
     */
    verifyKey: string;
    /**
     * Creates a new Application instance.
     * @param {ApiApplication} data - The data object containing application information.
     */
    constructor(data: ApiApplication);
}
/**
 * Represents installation parameters for an application.
 */
export declare class ApplicationInstallParams {
    /**
     * The permissions required for the installation.
     * @type {string}
     */
    permissions: string;
    /**
     * The scopes associated with the installation.
     * @type {string[]}
     */
    scopes: string[];
    /**
     * Creates a new ApplicationInstallParams instance.
     * @param {ApiApplicationInstallParams} data - The data object containing installation parameters.
     */
    constructor(data: ApiApplicationInstallParams);
}
