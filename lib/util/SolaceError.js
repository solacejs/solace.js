"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom error class for handling WebsocketClient errors with specific error codes.
 */
class SolaceError extends Error {
    /**
     * Creates a new SolaceError instance with a specific error code.
     * @param {number} code - The error code.
     */
    constructor(code) {
        // Handle specific error codes and provide error messages accordingly.
        switch (code) {
            case 4000:
                super("Please try reconnecting.");
                this.name = "Unknown Error";
                break;
            case 4001:
                super("An invalid opcode was provided for some reason.");
                this.name = "Unknown Opcode";
                break;
            case 4002:
                super("An invalid payload was provided for some reason.");
                this.name = "Decode Error";
                break;
            case 4003:
                super("Payload was sent prior to identification for some reason.");
                this.name = "Not Authenticated";
                break;
            case 4004:
                super("The token you have provided is incorrect.");
                this.name = "Authentication Failed";
                break;
            case 4005:
                super("More than one payload was sent to Discord for some reason.");
                this.name = "Already Authenticated";
                break;
            case 4007:
                super("The sequence sent to Discord when resuming was invalid for some reason. Please try reconnecting.");
                this.name = "Invalid Sequence";
                break;
            case 4008:
                super("You are sending way too many requests to Discord. You will now be disconnected.");
                this.name = "Rate Limited";
                break;
            case 4009:
                super("Your session has timed out for some reason. Please try reconnecting.");
                this.name = "Session Timed Out";
                break;
            case 4010:
                super("An invalid shard was provided.");
                this.name = "Invalid Shard";
                break;
            case 4011:
                super("Your bot is in a lot of servers. Sharding is now required for your bot.");
                this.name = "Sharding Required";
                break;
            case 4012:
                super("Looks like there is an invalid API version for some reason.");
                this.name = "Invalid API Version";
                break;
            case 4013:
                super("You provided invalid intents.");
                this.name = "Invalid Intents";
                break;
            case 4014:
                super("You have requested a disallowed intent. Check the Discord developer portal to make sure you have that intent active.");
                this.name = "Disallowed Intents";
                break;
            default:
                super("Please try reconnecting.");
                this.name = "Unknown Error";
                break;
        }
    }
}
exports.default = SolaceError;
