import Client from "../client/Client";
import Event from "./Event";
export default class Registry {
    static registerEvents(client: Client, ...args: Event[]): void;
}
