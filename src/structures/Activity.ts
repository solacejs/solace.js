import IActivity from "../interfaces/ApiActivity";

export default class Activity {
    
    public partyId: string | null;
    public type: number;
    
    constructor(data: IActivity) {
        this.partyId = data.party_id ?? null;
        this.type = data.type;
    }
}