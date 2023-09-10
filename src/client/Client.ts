import EventEmitter from "events";
import ClientOptions from "../interfaces/ClientOptions";
import WebsocketClient from "./WebsocketClient";
import GatewayIntents from "../config/GatewayIntents";
import User from "../structures/User";
import ClientEvents from "../util/ClientEvents";

export default class Client extends EventEmitter {

    private ws: WebsocketClient | null = null;

    public user: User | null = null;

    constructor(public options: ClientOptions) {
        super();

        if (Array.isArray(options.intents)) this.options.intents = GatewayIntents.combineIntents(...options.intents);

        this.ws = new WebsocketClient(this);
    }

    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this {
        return super.once(event, listener as (...args: any[]) => void);
    }

    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this {
        return super.on(event, listener as (...args: any[]) => void);
    }

    public async login() {
        await this.ws?.connect();
    }
}