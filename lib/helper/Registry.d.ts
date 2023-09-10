import Client from "../client/Client";
import Event from "./Event";
export default class EventRegistry {
    static registerEvents(client: Client, ...args: Event[]): void;
}
