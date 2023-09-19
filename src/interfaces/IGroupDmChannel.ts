export default interface IGroupDmChannel {
    name: string;
    icon?: null;
    recipients?: (RecipientsEntity)[] | null;
    last_message_id: string;
    type: number;
    id: string;
    owner_id: string;
}

export interface RecipientsEntity {
    username: string;
    discriminator: string;
    id: string;
    avatar: string;
}
