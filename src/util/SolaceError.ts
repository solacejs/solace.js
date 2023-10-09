/**
 * Custom error class for handling WebsocketClient errors with specific error codes.
 */
export class SolaceError extends Error {

    constructor(name: string, message: string) {
        super(message);
        this.name = name;
    }
}
