import { Client } from "../client/Client";

/**
 * Represents the structure of a channel.
 */
export interface ApiChannel {
    
    /**
     * Instance of the client.
     */
    client: Client;

    /**
     * The unique identifier of the channel.
     */
    id: string;

    /**
     * The type of the channel, represented as a number.
     */
    type: number;
}

export interface ApiChannelOverwrite {
    allow: string;
    deny: string;
    id: string;
    type: number;
}