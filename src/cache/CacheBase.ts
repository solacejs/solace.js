import { Client } from "../client/Client";
import { Collection } from "../util/Collection";

export class CacheBase {

    public readonly cache: Collection;

    constructor(public client: Client) {
        this.cache = new Collection();
    }
}