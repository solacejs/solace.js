import EventEmitter from "events";
import Client from "./Client";

export default class WebsocketClient extends EventEmitter {

    constructor(private client: Client) {
        super();        
    }


}