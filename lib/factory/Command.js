"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandOption = exports.CommandOptionType = void 0;
var CommandOptionType;
(function (CommandOptionType) {
    CommandOptionType[CommandOptionType["SUB_COMMAND"] = 1] = "SUB_COMMAND";
    CommandOptionType[CommandOptionType["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
    CommandOptionType[CommandOptionType["STRING"] = 3] = "STRING";
    CommandOptionType[CommandOptionType["INTEGER"] = 4] = "INTEGER";
    CommandOptionType[CommandOptionType["BOOLEAN"] = 5] = "BOOLEAN";
    CommandOptionType[CommandOptionType["USER"] = 6] = "USER";
    CommandOptionType[CommandOptionType["CHANNEL"] = 7] = "CHANNEL";
    CommandOptionType[CommandOptionType["ROLE"] = 8] = "ROLE";
    CommandOptionType[CommandOptionType["MENTIONABLE"] = 9] = "MENTIONABLE";
    CommandOptionType[CommandOptionType["NUMBER"] = 10] = "NUMBER";
    CommandOptionType[CommandOptionType["ATTACHMENT"] = 11] = "ATTACHMENT";
})(CommandOptionType || (exports.CommandOptionType = CommandOptionType = {}));
class CommandOption {
    constructor({ name, type, description, required, choices, channelTypes, minValue, maxValue, maxLength, autoComplete, }) {
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
exports.CommandOption = CommandOption;
class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.usageMessage = null;
        this.options = [];
    }
}
exports.Command = Command;
