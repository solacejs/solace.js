"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
/**
 * A Collection class that extends the Map class and implements a simple LRU (Least Recently Used) cache.
 * @template K - The type of keys in the collection.
 * @template V - The type of values associated with the keys.
 */
class Collection extends Map {
    /**
     * Creates a new `Collection` instance with a specified maximum size.
     * @param maxSize - The maximum number of key-value pairs the collection can hold before evicting the least recently used item.
     */
    constructor(maxSize) {
        super();
        this.maxSize = maxSize;
        this.accessOrder = [];
    }
    /**
     * Sets a key-value pair in the collection. If the collection size exceeds the maximum allowed size, it removes the least recently used item.
     * @param key - The key to set.
     * @param value - The value associated with the key.
     * @returns The `Collection` instance to allow for method chaining.
     */
    set(key, value) {
        if (this.size >= this.maxSize) {
            const lruKey = this.accessOrder.shift();
            if (lruKey)
                this.delete(lruKey);
        }
        super.set(key, value);
        this.accessOrder.push(key);
        return this;
    }
    /**
     * Retrieves the value associated with a key in the collection and updates its position in the access order.
     * @param key - The key to retrieve.
     * @returns The value associated with the key, or undefined if the key is not in the collection.
     */
    get(key) {
        if (super.has(key)) {
            const index = this.accessOrder.indexOf(key);
            if (index !== -1) {
                this.accessOrder.splice(index, 1);
                this.accessOrder.push(key);
            }
        }
        return super.get(key);
    }
}
exports.Collection = Collection;
