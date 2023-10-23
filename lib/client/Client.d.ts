/// <reference types="node" />
import EventEmitter from "events";
import { ClientOptions } from "../interfaces/ClientOptions";
import { WebsocketClient } from "./WebsocketClient";
import { User } from "../structures/User";
import { ClientEvents } from "../interfaces/ClientEvents";
import { ApiChannel } from "../interfaces/ApiChannel";
import { ChannelCache } from "../cache/ChannelCache";
import { GuildCache } from "../cache/GuildCache";
/**
 * Represents a client that interacts with a WebSocket and communicates with discord.
 */
export declare class Client extends EventEmitter {
    options: ClientOptions;
    /**
     * The WebSocket client used by the main client.
     */
    ws: WebsocketClient | null;
    /**
     * The user associated with the client if logged in.
     */
    user: User | null;
    /**
     * Caches the channels so the bot doesn't have to fetch them all the time.
     */
    channels: ChannelCache;
    guilds: GuildCache;
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
    /**
     * Fetch a guild from the discord api
     * @param guildId The id of the guild
     * @returns guild data from the discord api
     */
    fetchGuild(guildId: string): Promise<any>;
    /**
     * Fetch a channel from the discord api
     * @param channelId The id of the channel
     * @returns channel data from the discord api
     */
    fetchChannel(channelId: string): Promise<ApiChannel>;
}
