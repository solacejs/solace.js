export default interface IDmChannel {
    last_message_id: string;
    type: number;
    id: string;
    recipients?: (RecipientsEntity)[] | null;
}

export interface RecipientsEntity {
    username: string;
    discriminator: string;
    id: string;
    avatar: string;
}
