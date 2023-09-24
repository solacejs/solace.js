import { ApiInteraction } from "../interfaces/ApiInteraction";
import { GuildMember } from "./GuildMember";
import { User } from "./User";

/**
 * Represents an interaction with the bot.
 */
export class Interaction {
    
    /**
     * The unique ID of the interaction.
     * @type {string}
     */
    public id: string;

    /**
     * The member associated with the interaction, or null if not provided.
     * @type {GuildMember | null}
     */
    public member: GuildMember | null;

    /**
     * The name of the interaction.
     * @type {string}
     */
    public name: string;

    /**
     * The type of the interaction.
     * @type {number}
     */
    public type: number;

    /**
     * The user who initiated the interaction, or null if not provided.
     * @type {User | null}
     */
    public user: User | null;

    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data: ApiInteraction) {
        this.id = data.id;
        this.member = data.member ? new GuildMember(data.member) : null;
        this.name = data.name;
        this.type = data.type;
        this.user = data.user ? new User(data.user) : null;
    }
}
