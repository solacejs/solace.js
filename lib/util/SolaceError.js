"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolaceError = void 0;
/**
 * Custom error class for handling WebsocketClient errors with specific error codes.
 */
class SolaceError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}
exports.SolaceError = SolaceError;
