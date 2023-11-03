import { GuildTextChannel } from "../structures/GuildTextChannel";
import { InteractionType } from "../structures/Interaction";
import { ApiGuildMember } from "./ApiGuildMember";
import { ApiMessage } from "./ApiMessage";
import { ApiUser } from "./ApiUser";
/**
 * Represents an interaction in an API response.
 */
export interface ApiInteraction {
    app_permissions?: string;
    application_id: string;
    channel?: GuildTextChannel;
    channel_id?: string;
    data?: {
        name?: string;
        type?: number;
        id?: string;
    };
    entitlements: [];
    guild_id?: string;
    guild_locale?: string;
    /**
     * The unique ID of the interaction.
     */
    id: string;
    locale?: string;
    /**
     * Information about the guild member (user) who triggered the interaction (if applicable).
     */
    member?: ApiGuildMember;
    message?: ApiMessage;
    /**
     * The name of the interaction.
     */
    name: string;
    token: string;
    /**
     * The type of the interaction.
     */
    type: InteractionType;
    /**
     * Information about the user who triggered the interaction.
     */
    user?: ApiUser;
    version: number;
}
export interface ApiApplicationCommandPermissionsStructure {
    id: string;
    permission: boolean;
    type: ApiApplicationCommandPermissionType;
}
export declare enum ApiApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2,
    CHANNEL = 3
}
