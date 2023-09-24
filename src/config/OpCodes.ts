/**
 * A utility class for managing Discord Gateway operation codes (OpCodes).
 */
export class OpCodes {

    /**
     * Represents the "DISPATCH" operation code used for dispatching events from discord.
     */
    public static DISPATCH = 0;

    /**
     * Represents the "HEARTBEAT" operation code used for heartbeating to keep the connection alive.
     */
    public static HEARTBEAT = 1;

    /**
     * Represents the "IDENTIFY" operation code used for identifying with discord.
     */
    public static IDENTIFY = 2;

    /**
     * Represents the "PRESENCE_UPDATE" operation code used for updating the client's presence.
     */
    public static PRESENCE_UPDATE = 3;

    /**
     * Represents the "VOICE_STATE_UPDATE" operation code used for updating voice states.
     */
    public static VOICE_STATE_UPDATE = 4;

    /**
     * Represents the "RESUME" operation code used for resuming a connection.
     */
    public static RESUME = 6;

    /**
     * Represents the "RECONNECT" operation code used for reconnecting to discord.
     */
    public static RECONNECT = 7;

    /**
     * Represents the "REQUEST_GUILD_MEMBERS" operation code used for requesting guild members.
     */
    public static REQUEST_GUILD_MEMBERS = 8;

    /**
     * Represents the "INVALID_SESSION" operation code used for handling an invalid session.
     */
    public static INVALID_SESSION = 9;

    /**
     * Represents the "HELLO" operation code used for acknowledging the connection and receiving heartbeat intervals.
     */
    public static HELLO = 10;

    /**
     * Represents the "HEARTBEAT_ACK" operation code used for acknowledging received heartbeats.
     */
    public static HEARTBEAT_ACK = 11;
}