/// <reference types="node" />
import EventEmitter from "events";
import ClientOptions from "../interfaces/ClientOptions";
import User from "../structures/User";
export default class Client extends EventEmitter {
    options: ClientOptions;
    private ws;
    user: User | null;
    constructor(options: ClientOptions);
    login(): Promise<void>;
}
