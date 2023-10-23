"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheBase = void 0;
const Collection_1 = require("../util/Collection");
class CacheBase {
    constructor(client) {
        this.client = client;
        this.cache = new Collection_1.Collection();
    }
}
exports.CacheBase = CacheBase;
