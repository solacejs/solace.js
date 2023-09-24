/// <reference types="node" />
import EventEmitter from "events";
import { ClientOptions } from "../interfaces/ClientOptions";
import { User } from "../structures/User";
import { ClientEvents } from "../interfaces/ClientEvents";
/**
 * Represents a client that interacts with a WebSocket and communicates with discord.
 */
export declare class Client extends EventEmitter {
    options: ClientOptions;
    /**
     * The WebSocket client used by the main client.
     */
    private ws;
    /**
     * The user associated with the client if logged in.
     */
    user: User | null;
    /**
     * Creates a new Client instance.
     * @param {ClientOptions} options - The client configuration options.
     */
    constructor(options: ClientOptions);
    /**
     * Register a one-time event listener for the specified event.
     * @param {K} event - The event name.
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns The current Client instance.
     */
    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    /**
     * Register an event listener for the specified event.
     * @param {K} event - The event name.
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns {this} - The current Client instance.
     */
    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    /**
     * Asynchronously log in the client by establishing a WebSocket connection.
     */
    login(): Promise<void>;
    /**
     * Asynchronously creates a new message in a specified channel.
     * @param channelId - The unique identifier of the target channel where the message will be sent.
     * @param message - The content of the message to be sent.
     * @throws {Error} If an error occurs during the message creation process.
     */
    createMessage(channelId: string, message: string): Promise<void>;
}
