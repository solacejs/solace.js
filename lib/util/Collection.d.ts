/**
 * A Collection class that extends the Map class and implements a simple LRU (Least Recently Used) cache.
 * @template K - The type of keys in the collection.
 * @template V - The type of values associated with the keys.
 */
export declare class Collection<K, V> extends Map<K, V> {
    private maxSize;
    /**
     * Array used to track the access order of keys.
     */
    private accessOrder;
    /**
     * Creates a new `Collection` instance with a specified maximum size.
     * @param maxSize - The maximum number of key-value pairs the collection can hold before evicting the least recently used item.
     */
    constructor(maxSize: number);
    /**
     * Sets a key-value pair in the collection. If the collection size exceeds the maximum allowed size, it removes the least recently used item.
     * @param key - The key to set.
     * @param value - The value associated with the key.
     * @returns The `Collection` instance to allow for method chaining.
     */
    set(key: K, value: V): this;
    /**
     * Retrieves the value associated with a key in the collection and updates its position in the access order.
     * @param key - The key to retrieve.
     * @returns The value associated with the key, or undefined if the key is not in the collection.
     */
    get(key: K): V | undefined;
}
