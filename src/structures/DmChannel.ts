import { ApiDmChannel } from "../interfaces/ApiDmChannel";
import { Channel } from "./Channel";
import { RecipientEntity } from "./RecipientEntity";

export class DmChannel extends Channel {
    
    public lastMessageId: string;
    public recipients: RecipientEntity[];

    constructor(data: ApiDmChannel) {
        super(data);
        this.lastMessageId = data.last_message_id;
        this.recipients = data.recipients ? data.recipients.map((recipient) => new RecipientEntity(recipient)) : [];
    }
}