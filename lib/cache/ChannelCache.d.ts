import { Client } from "../client/Client";
import { DmChannel } from "../structures/DmChannel";
import { GuildTextChannel } from "../structures/GuildTextChannel";
import { Collection } from "../util/Collection";
/**
 * Cache manager for channels
 */
export declare class ChannelCache {
    client: Client;
    readonly cache: Collection<string, GuildTextChannel | DmChannel>;
    constructor(client: Client);
    /**
     * Fetches a channel from discord or grabs a channel from cache if it exists.
     * @param id - Channel ID
     * @returns A channel or null
     */
    fetch(id: string): Promise<GuildTextChannel | DmChannel | null>;
}
