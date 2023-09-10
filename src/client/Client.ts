import EventEmitter from "events";
import ClientOptions from "../interfaces/ClientOptions";
import WebsocketClient from "./WebsocketClient";
import GatewayIntents from "../config/GatewayIntents";
import User from "../structures/User";

export default class Client extends EventEmitter {

    private ws: WebsocketClient | null = null;

    public user: User | null = null;

    constructor(public options: ClientOptions) {
        super();

        if (Array.isArray(options.intents)) this.options.intents = GatewayIntents.combineIntents(...options.intents);

        this.ws = new WebsocketClient(this);
    }

    public async login() {
        await this.ws?.connect();
    }
}