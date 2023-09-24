import { ApiInteraction } from "../interfaces/ApiInteraction";
import { GuildMember } from "./GuildMember";
import { User } from "./User";
/**
 * Represents an interaction with the bot.
 */
export declare class Interaction {
    /**
     * The unique ID of the interaction.
     * @type {string}
     */
    id: string;
    /**
     * The member associated with the interaction, or null if not provided.
     * @type {GuildMember | null}
     */
    member: GuildMember | null;
    /**
     * The name of the interaction.
     * @type {string}
     */
    name: string;
    /**
     * The type of the interaction.
     * @type {number}
     */
    type: number;
    /**
     * The user who initiated the interaction, or null if not provided.
     * @type {User | null}
     */
    user: User | null;
    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data: ApiInteraction);
}
