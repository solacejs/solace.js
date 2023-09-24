import IChannel from "../interfaces/ApiChannel";

export default class Channel {
    
    public id: string;
    public type: number;

    constructor(data: IChannel) {
        this.id = data.id;
        this.type = data.type;
    }
}