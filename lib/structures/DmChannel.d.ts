import { ApiDmChannel } from "../interfaces/ApiDmChannel";
import { Channel } from "./Channel";
import { RecipientEntity } from "./RecipientEntity";
export declare class DmChannel extends Channel {
    lastMessageId: string;
    recipients: RecipientEntity[];
    constructor(data: ApiDmChannel);
}
