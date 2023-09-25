import EventEmitter from "events";
import { ClientOptions } from "../interfaces/ClientOptions";
import { WebsocketClient } from "./WebsocketClient";
import { GatewayIntents } from "../config/GatewayIntents";
import { User } from "../structures/User";
import { ClientEvents } from "../interfaces/ClientEvents";
import { Constants } from "../config/Constants";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { ApiChannel } from "../interfaces/ApiChannel";
import { Guild } from "../structures/Guild";
import { ApiGuildTextChannel } from "../interfaces/ApiGuildTextChannel";

/**
 * Represents a client that interacts with a WebSocket and communicates with discord.
 */
export class Client extends EventEmitter {

    /**
     * The WebSocket client used by the main client.
     */
    private ws: WebsocketClient | null = null;

    /**
     * The user associated with the client if logged in.
     */
    public user: User | null = null;

    /**
     * Creates a new Client instance.
     * @param {ClientOptions} options - The client configuration options.
     */
    constructor(public options: ClientOptions) {
        super();

        // Combine the specified Gateway Intents if they are provided as an array.
        if (Array.isArray(options.intents)) this.options.intents = GatewayIntents.combineIntents(...options.intents);

        // Initialize the WebSocket client.
        this.ws = new WebsocketClient(this);
    }

    /**
     * Register a one-time event listener for the specified event.
     * @param {K} event - The event name. 
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns The current Client instance.
     */
    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this {
        return super.once(event, listener as (...args: any[]) => void);
    }

    /**
     * Register an event listener for the specified event.
     * @param {K} event - The event name.
     * @param {(...args: ClientEvents[K]) => void} listener - The event listener.
     * @returns {this} - The current Client instance.
     */
    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this {
        return super.on(event, listener as (...args: any[]) => void);
    }

    /**
     * Asynchronously log in the client by establishing a WebSocket connection.
     */
    public async login() {
        await this.ws?.connect();
    }

    /**
     * Asynchronously creates a new message in a specified channel.
     * @param channelId - The unique identifier of the target channel where the message will be sent.
     * @param message - The content of the message to be sent.
     * @throws {Error} If an error occurs during the message creation process.
     */
    public async createMessage(channelId: string, message: string): Promise<void> {
        try {
            await fetch(`${Constants.API}/channels/${channelId}/messages`, {
                method: "POST",
                headers: {
                    Authorization: `Bot ${this.options.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: message
                })
            });
        } catch (err) {
            throw new Error(`Failed to create message: ${err}`);
        }
    }

    public async fetchGuild(guildId: string) {
        const res = await fetch(`${Constants.API}/guilds/${guildId}`, {
            headers: {
                Authorization: `Bot ${this.options.token}`,
                "Content-Type": "application/json"
            }
        });

        return await res.json();
    }

    public async fetchChannel(channelId: string) {
        const res = await fetch(`${Constants.API}/channels/${channelId}`, {
            headers: {
                Authorization: `Bot ${this.options.token}`,
                "Content-Type": "application/json"
            }
        });

        return await res.json()
    }
}