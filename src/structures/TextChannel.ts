import { Channel } from "./Channel";

export class TextChannel extends Channel {
    
    public lastMessageId: any;
    public flags: any;

    constructor(data: any) {
        super(data);
        this.lastMessageId = data.last_message_id;
        this.flags = data.flags;
    }
}