import Client from "../client/Client";
import ClientEvents from "../util/ClientEvents";
export default class Event {
    name: keyof ClientEvents;
    once: boolean;
    constructor(name: keyof ClientEvents, once: boolean);
    execute(client: Client, ...args: any[]): Promise<void>;
}
