import Client from "../client/Client";
export default class EventHandler {
    static READY(client: Client, data: any): void;
    static MESSAGE_CREATE(client: Client, data: any): void;
}
