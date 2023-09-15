/**
 * A utility class containing constants related to the Discord API.
 */
export default class Constants {

    /**
     * The base URL of the Discord API (v10).
     */
    public static API = "https://discord.com/api/v10/";

    /**
     * The URL for accessing the Discord Gateway API, which is derived from the API base URL.
     */
    public static GATEWAY = this.API + "gateway";
}
