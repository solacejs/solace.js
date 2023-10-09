import { Client } from "../client/Client";
import { Collection } from "../util/Collection";
export declare class CacheBase {
    client: Client;
    readonly cache: Collection;
    constructor(client: Client);
}
