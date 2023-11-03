import { Client } from "../client/Client";
import { Interaction } from "../structures/Interaction";

export enum CommandOptionType {
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
  ATTACHMENT = 11,
}

export class CommandOption {
  public name: string;
  public type: CommandOptionType;
  public description: string;
  public required: boolean;
  public choices: any;
  public channelTypes: any;
  public minValue?: number;
  public maxValue?: number;
  public maxLength?: number;
  public autoComplete: boolean;

  constructor({
    name,
    type,
    description,
    required,
    choices,
    channelTypes,
    minValue,
    maxValue,
    maxLength,
    autoComplete,
  }: {
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
  }) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.required = !!required;
    this.choices = choices;
    this.channelTypes = channelTypes;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.maxLength = maxLength;
    this.autoComplete = !!autoComplete;
  }
}

export abstract class Command {
  public usageMessage: string | null = null;
  public options: CommandOption[] = [];
  constructor(public name: string, public description: string) {}
  public abstract execute(
    client: Client,
    interaction: Interaction
  ): Promise<void>;
}
