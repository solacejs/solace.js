import IGuild from "./ApiGuild";
import ITeam from "./ApiTeam";
import IUser from "./ApiUser";
/**
 * Interface defining the structure of an Application which is sent with Rich Presence-related chat embeds
 */
export default interface ApiApplication {
    /**
     * The approximate number of guilds (servers) the bot is in, if applicable.
     */
    approximate_guild_count?: number;
    /**
     * Indicates whether the bot is publicly available.
     */
    bot_public: boolean;
    /**
     * Indicates whether the bot requires code grant for access.
     */
    bot_require_code_grant: boolean;
    /**
     * URL to the cover image of the application, if provided.
     */
    cover_image?: string;
    /**
     * Custom installation URL for the application, if available.
     */
    custom_install_url?: string;
    /**
     * The description of the application.
     */
    description: string;
    /**
     * Flags associated with the application, if any.
     */
    flags?: number;
    /**
     * Partial guild object representing the linked guild, if applicable.
     */
    guild?: IGuild;
    /**
     * The ID of the guild (server) linked to the application, if applicable.
     */
    guild_id?: string;
    /**
     * The icon associated with the application, if available.
     */
    icon: string | null;
    /**
     * The unique identifier of the application.
     */
    id: string;
    /**
     * Installation parameters for the application.
     */
    install_params?: ApiApplicationInstallParams;
    /**
     * Partial user object representing the owner of the application, if applicable.
     */
    owner?: IUser;
    /**
     * URL to the privacy policy for the application, if provided.
     */
    privacy_policy_url?: string;
    /**
     * Origins allowed to make RPC requests to this application, if applicable.
     */
    rpc_origins?: string[];
    /**
     * URL for role connections verification, if applicable.
     */
    role_connections_verification_url?: string;
    /**
     * The slug of the application, if available.
     */
    slug?: string;
    /**
     * A summary of the application.
     */
    summary: string;
    /**
     * Tags associated with the application, if any.
     */
    tags?: string[];
    /**
     * Information about the team associated with the application, if applicable.
     */
    team: ITeam | null;
    /**
     * URL to the terms of service for the application, if provided.
     */
    terms_of_service_url?: string;
    /**
     * The verification key for the application.
     */
    verify_key: string;
}
/**
 * Interface defining the structure of installation parameters for the application.
 */
export interface ApiApplicationInstallParams {
    /**
     * The permissions required by the application.
     */
    permissions: string;
    /**
     * The scopes required by the application.
     */
    scopes: string[];
}
