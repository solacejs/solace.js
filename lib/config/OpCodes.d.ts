/**
 * A utility class for managing Discord Gateway operation codes (OpCodes).
 */
export declare class OpCodes {
    /**
     * Represents the "DISPATCH" operation code used for dispatching events from discord.
     */
    static DISPATCH: number;
    /**
     * Represents the "HEARTBEAT" operation code used for heartbeating to keep the connection alive.
     */
    static HEARTBEAT: number;
    /**
     * Represents the "IDENTIFY" operation code used for identifying with discord.
     */
    static IDENTIFY: number;
    /**
     * Represents the "PRESENCE_UPDATE" operation code used for updating the client's presence.
     */
    static PRESENCE_UPDATE: number;
    /**
     * Represents the "VOICE_STATE_UPDATE" operation code used for updating voice states.
     */
    static VOICE_STATE_UPDATE: number;
    /**
     * Represents the "RESUME" operation code used for resuming a connection.
     */
    static RESUME: number;
    /**
     * Represents the "RECONNECT" operation code used for reconnecting to discord.
     */
    static RECONNECT: number;
    /**
     * Represents the "REQUEST_GUILD_MEMBERS" operation code used for requesting guild members.
     */
    static REQUEST_GUILD_MEMBERS: number;
    /**
     * Represents the "INVALID_SESSION" operation code used for handling an invalid session.
     */
    static INVALID_SESSION: number;
    /**
     * Represents the "HELLO" operation code used for acknowledging the connection and receiving heartbeat intervals.
     */
    static HELLO: number;
    /**
     * Represents the "HEARTBEAT_ACK" operation code used for acknowledging received heartbeats.
     */
    static HEARTBEAT_ACK: number;
}
