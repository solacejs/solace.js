/**
 * Custom error class for handling WebsocketClient errors with specific error codes.
 */
export default class SolaceError extends Error {
    /**
     * Creates a new SolaceError instance with a specific error code.
     * @param {number} code - The error code.
     */
    constructor(code: number);
}
