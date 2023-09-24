import IChannel from "../interfaces/ApiChannel";
export default class Channel {
    id: string;
    type: number;
    constructor(data: IChannel);
}
