import { ApiActivity } from "../interfaces/ApiActivity";
/**
 * Represents an activity.
 */
export declare class Activity {
    /**
     * The ID of the party associated with the activity, or null if not applicable.
     * @type {string | null}
     */
    partyId: string | null;
    /**
     * The type of the activity.
     * @type {number}
     */
    type: number;
    /**
     * Creates a new Activity instance.
     * @param {ApiActivity} data - The data object containing activity information.
     */
    constructor(data: ApiActivity);
}
