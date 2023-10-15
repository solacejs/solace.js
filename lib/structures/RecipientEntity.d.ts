import { ApiRecipientsEntity } from "../interfaces/ApiRecipientsEntity";
export declare class RecipientEntity {
    avatar: string;
    discriminator: string;
    id: string;
    username: string;
    constructor(data: ApiRecipientsEntity);
}
