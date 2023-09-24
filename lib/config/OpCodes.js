"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpCodes = void 0;
/**
 * A utility class for managing Discord Gateway operation codes (OpCodes).
 */
class OpCodes {
}
exports.OpCodes = OpCodes;
/**
 * Represents the "DISPATCH" operation code used for dispatching events from discord.
 */
OpCodes.DISPATCH = 0;
/**
 * Represents the "HEARTBEAT" operation code used for heartbeating to keep the connection alive.
 */
OpCodes.HEARTBEAT = 1;
/**
 * Represents the "IDENTIFY" operation code used for identifying with discord.
 */
OpCodes.IDENTIFY = 2;
/**
 * Represents the "PRESENCE_UPDATE" operation code used for updating the client's presence.
 */
OpCodes.PRESENCE_UPDATE = 3;
/**
 * Represents the "VOICE_STATE_UPDATE" operation code used for updating voice states.
 */
OpCodes.VOICE_STATE_UPDATE = 4;
/**
 * Represents the "RESUME" operation code used for resuming a connection.
 */
OpCodes.RESUME = 6;
/**
 * Represents the "RECONNECT" operation code used for reconnecting to discord.
 */
OpCodes.RECONNECT = 7;
/**
 * Represents the "REQUEST_GUILD_MEMBERS" operation code used for requesting guild members.
 */
OpCodes.REQUEST_GUILD_MEMBERS = 8;
/**
 * Represents the "INVALID_SESSION" operation code used for handling an invalid session.
 */
OpCodes.INVALID_SESSION = 9;
/**
 * Represents the "HELLO" operation code used for acknowledging the connection and receiving heartbeat intervals.
 */
OpCodes.HELLO = 10;
/**
 * Represents the "HEARTBEAT_ACK" operation code used for acknowledging received heartbeats.
 */
OpCodes.HEARTBEAT_ACK = 11;
