import { Client } from "../client/Client";
import { Interaction } from "../structures/Interaction";
export declare enum CommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10,
    ATTACHMENT = 11
}
export declare class CommandOption {
    name: string;
    type: CommandOptionType;
    description: string;
    required: boolean;
    choices: any;
    channelTypes: any;
    minValue?: number;
    maxValue?: number;
    maxLength?: number;
    autoComplete: boolean;
    constructor({ name, type, description, required, choices, channelTypes, minValue, maxValue, maxLength, autoComplete, }: {
        name: string;
        type: number;
        description: string;
        required?: boolean;
        choices?: [];
        channelTypes?: [];
        minValue?: number;
        maxValue?: number;
        maxLength?: number;
        autoComplete?: boolean;
    });
}
export declare abstract class Command {
    name: string;
    description: string;
    usageMessage: string | null;
    options: CommandOption[];
    constructor(name: string, description: string);
    abstract execute(client: Client, interaction: Interaction): Promise<void>;
}
