import { ApiActivity } from "../interfaces/ApiActivity";

/**
 * Represents an activity.
 */
export class Activity {

    /**
     * The ID of the party associated with the activity, or null if not applicable.
     * @type {string | null}
     */
    public partyId: string | null;
    
    /**
     * The type of the activity.
     * @type {number}
     */
    public type: number;

    /**
     * Creates a new Activity instance.
     * @param {ApiActivity} data - The data object containing activity information.
     */
    constructor(data: ApiActivity) {
        this.partyId = data.party_id ?? null;
        this.type = data.type;
    }
}