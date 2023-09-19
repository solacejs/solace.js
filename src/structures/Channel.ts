import IChannel from "../interfaces/IChannel";

export default class Channel {
    
    public flags: number | null;
    public id: string;
    public name: string;
    public type: number;

    constructor(data: IChannel) {
        this.flags = data.flags ?? null;
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
    }
}