import { ApiChannel } from "./ApiChannel";
import { ApiRecipientsEntity } from "./ApiRecipientsEntity";
/**
 * Represents the structure of a direct message (DM) channel.
 */
export interface ApiDmChannel extends ApiChannel {
    /**
     * The unique identifier of the last message sent in the DM channel.
     */
    last_message_id: string;
    /**
     * An array of recipients in the DM channel. It can be an empty array or `null` if there are no recipients.
     */
    recipients?: ApiRecipientsEntity[] | null;
}
