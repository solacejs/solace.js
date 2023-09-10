/// <reference types="node" />
import EventEmitter from "events";
import ClientOptions from "../interfaces/ClientOptions";
import User from "../structures/User";
import ClientEvents from "../util/ClientEvents";
export default class Client extends EventEmitter {
    options: ClientOptions;
    private ws;
    user: User | null;
    constructor(options: ClientOptions);
    once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    login(): Promise<void>;
}
