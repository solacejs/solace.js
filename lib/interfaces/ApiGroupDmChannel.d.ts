import { ApiRecipientsEntity } from "./ApiRecipientsEntity";
/**
 * Represents the structure of a group direct message (DM) channel.
 */
export interface ApiGroupDmChannel {
    /**
     * The icon of the group DM channel, which is always null for this type of channel.
     * @remarks
     * This property is optional.
     */
    icon?: null;
    /**
     * The unique identifier of the group DM channel.
     */
    id: string;
    /**
     * The unique identifier of the last message sent in the group DM channel.
     */
    last_message_id: string;
    /**
     * The name of the group DM channel.
     */
    name: string;
    /**
     * The unique identifier of the owner of the group DM channel.
     */
    owner_id: string;
    /**
     * An array of recipient entities representing the users in the group DM.
     * @remarks
     * This property is optional and can be null.
     */
    recipients?: (ApiRecipientsEntity)[] | null;
    /**
     * The type of the channel, which is a number representing the channel type.
     */
    type: number;
}
