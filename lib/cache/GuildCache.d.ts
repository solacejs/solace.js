import { Client } from "../client/Client";
import { Guild } from "../structures/Guild";
import { Collection } from "../util/Collection";
export declare class GuildCache {
    client: Client;
    readonly cache: Collection<string, Guild>;
    constructor(client: Client);
    fetch(id: string): Promise<Guild | null>;
}
