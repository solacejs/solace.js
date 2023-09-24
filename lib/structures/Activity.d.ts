import IActivity from "../interfaces/ApiActivity";
export default class Activity {
    partyId: string | null;
    type: number;
    constructor(data: IActivity);
}
