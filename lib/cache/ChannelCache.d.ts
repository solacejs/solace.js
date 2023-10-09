import { GuildTextChannel } from "../structures/GuildTextChannel";
import { CacheBase } from "./CacheBase";
/**
 * Cache manager for channels
 */
export declare class ChannelCache extends CacheBase {
    /**
     * Fetches a channel from discord or grabs a channel from cache if it exists.
     * @param id - Channel ID
     * @returns A channel or null
     */
    fetch(id: string): Promise<GuildTextChannel | null>;
}
