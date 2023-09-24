import ApiRecipientsEntity from "./ApiRecipientsEntity";

export default interface ApiDmChannel {
    last_message_id: string;
    type: number;
    id: string;
    recipients?: (ApiRecipientsEntity)[] | null;
}