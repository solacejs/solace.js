import { ApiGuildMember } from "./ApiGuildMember";
import { ApiUser } from "./ApiUser";

/**
 * Represents an interaction in an API response.
 */
export interface ApiInteraction {
    /**
     * The unique ID of the interaction.
     */
    id: string;

    /**
     * Information about the guild member (user) who triggered the interaction (if applicable).
     */
    member?: ApiGuildMember;

    /**
     * The name of the interaction.
     */
    name: string;

    /**
     * The type of the interaction.
     */
    type: ApiInteractionType;

    /**
     * Information about the user who triggered the interaction.
     */
    user: ApiUser;
}

/**
 * Represents the possible types of an interaction.
 */
export type ApiInteractionType = 1 | 2 | 3 | 4 | 5;



export interface ApiApplicationCommandPermissionsStructure {
    id: string;
    permission: boolean;
    type: ApiApplicationCommandPermissionType;
}

export enum ApiApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2,
    CHANNEL = 3
}