import { ApiRecipientsEntity } from "../interfaces/ApiRecipientsEntity";

export class RecipientEntity {
    
    public avatar: string;
    public discriminator: string;
    public id: string;
    public username: string;

    constructor(data: ApiRecipientsEntity) {
        this.avatar = data.avatar;
        this.discriminator = data.discriminator;
        this.id = data.id;
        this.username = data.username;
    }
}