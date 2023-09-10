import Client from "../client/Client";
import User from "../structures/User";

export default class EventHandler {

    public static READY(client: Client, data: any) {
        client.user = new User(data.user);
        client.emit("ready", client);
    }

    public static MESSAGE_CREATE(client: Client, data: any) {
        client.emit("messageCreate", data);
    }
}