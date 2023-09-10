import Client from "../client/Client";
import ClientEvents from "../util/ClientEvents";

export default class Event {

    constructor(public name: keyof ClientEvents, public once: boolean) { }

    public async execute(client: Client, ...args: any[]) {
        throw new Error(`Event ${this.name} is missing an execute method.`);
    }
}