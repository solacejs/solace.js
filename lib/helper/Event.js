"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
/**
 * Represents an event that can be handled by the client.
 */
class Event {
    /**
     * Creates a new Event instance.
     * @param {keyof ClientEvents} name - The name of the event.
     * @param {boolean} once - Indicates whether the event should only be handled once.
     */
    constructor(name, once) {
        this.name = name;
        this.once = once;
    }
}
exports.Event = Event;
