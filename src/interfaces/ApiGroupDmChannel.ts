import ApiRecipientsEntity from "./ApiRecipientsEntity";

export default interface ApiGroupDmChannel {
    name: string;
    icon?: null;
    recipients?: (ApiRecipientsEntity)[] | null;
    last_message_id: string;
    type: number;
    id: string;
    owner_id: string;
}