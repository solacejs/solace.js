import { Guild } from "../structures/Guild";
import { CacheBase } from "./CacheBase";
export declare class GuildCache extends CacheBase {
    fetch(id: string): Promise<Guild>;
}
