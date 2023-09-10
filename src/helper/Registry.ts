import Client from "../client/Client";
import Event from "./Event";

export default class Registry {

    public static registerEvents(client: Client, ...args: Event[]) {
        args.forEach((event) => {
            event.once ? client.once(event.name, (...args: any[]) => event.execute(client, ...args)) : client.on(event.name, (...args: any[]) => event.execute(client, ...args));
        });
    }
}