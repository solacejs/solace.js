/**
 * Custom error class for handling WebsocketClient errors with specific error codes.
 */
export declare class SolaceError extends Error {
    constructor(name: string, message: string);
}
