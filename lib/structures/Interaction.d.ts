import { ApiInteraction } from "../interfaces/ApiInteraction";
import { GuildMember } from "./GuildMember";
import { GuildTextChannel } from "./GuildTextChannel";
import { Message } from "./Message";
import { User } from "./User";
export declare enum InteractionType {
    PING = 1,
    APPLICATION_COMMAND = 2,
    MESSAGE_COMPONENT = 3,
    APPLICATION_COMMAND_AUTOCOMPLETE = 4,
    MODAL_SUBMIT = 5
}
/**
 * Represents an interaction with the bot.
 */
export declare class Interaction {
    appPermissions: string | null;
    applicationId: string;
    channel?: GuildTextChannel;
    commandName: string | null;
    guildId: string | null;
    guildLocale: string | null;
    /**
     * The unique ID of the interaction.
     * @type {string}
     */
    id: string;
    locale: string | null;
    /**
     * The member associated with the interaction, or null if not provided.
     * @type {GuildMember | null}
     */
    member: GuildMember | null;
    message: Message | null;
    /**
     * The name of the interaction.
     * @type {string}
     */
    name: string;
    token: string;
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
    version: number;
    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data: ApiInteraction);
}
