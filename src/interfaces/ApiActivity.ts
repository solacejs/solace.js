/**
 * Interface defining the structure of an Acitivty which is sent with Rich Presence-related chat embeds
 */
export interface ApiActivity {
    /**
     * The party ID associated with the activity, if applicable.
     */
    party_id?: string;

    /**
     * The type of the activity.
     */
    type: number;
}