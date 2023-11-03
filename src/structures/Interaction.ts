import { Client } from "../client/Client";
import { ApiInteraction } from "../interfaces/ApiInteraction";
import { GuildMember } from "./GuildMember";
import { GuildTextChannel } from "./GuildTextChannel";
import { Message } from "./Message";
import { User } from "./User";

export enum InteractionType {
    PING = 1,
    APPLICATION_COMMAND = 2,
    MESSAGE_COMPONENT = 3,
    APPLICATION_COMMAND_AUTOCOMPLETE = 4,
    MODAL_SUBMIT = 5,
}

/**
 * Represents an interaction with the bot.
 */
export class Interaction {

    public appPermissions: string | null;

    public applicationId: string;

    public channel?: GuildTextChannel;

    public commandName: string | null;

    public guildId: string | null;

    public guildLocale: string | null;

    /**
     * The unique ID of the interaction.
     * @type {string}
     */
    public id: string;

    public locale: string | null;

    /**
     * The member associated with the interaction, or null if not provided.
     * @type {GuildMember | null}
     */
    public member: GuildMember | null;

    public message: Message | null;

    /**
     * The name of the interaction.
     * @type {string}
     */
    public name: string;

    public token: string;

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

    public version: number;

    /**
     * Creates a new Interaction instance.
     * @param {ApiInteraction} data - The data object containing interaction information.
     */
    constructor(data: ApiInteraction) {
        this.appPermissions = data.app_permissions ?? null;
        this.applicationId = data.application_id;
        this.commandName = data.data ? data.data.name ?? null : null;
        this.guildId = data.guild_id ?? null;
        this.guildLocale = data.guild_locale ?? null;
        this.id = data.id;
        this.locale = data.locale ?? null;
        this.member = data.member ? new GuildMember(data.member) : null;
        this.message = data.message ? new Message(data.message) : null;
        this.name = data.name;
        this.token = data.token;
        this.type = data.type;
        this.user = data.user ? new User(data.user) : null;
        this.version = data.version;
    }
}
