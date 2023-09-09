import EventEmitter from "events";
import ClientOptions from "../interfaces/ClientOptions";
import WebsocketClient from "./WebsocketClient";

export default class Client extends EventEmitter {

    private ws: WebsocketClient | null = null;

    constructor(private options: ClientOptions) {
        super();
        this.ws = new WebsocketClient(this);
    }

    public login() {
        // TODO: LOGIN
    }
}