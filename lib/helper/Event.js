"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    /**
     * Executes the event's logic.
     * This method should be overridden by subclasses to provide specific event handling logic.
     * @param {Client} client - The client instance.
     * @param {...any} args - Additional arguments passed when the event is triggered.
     * @throws {Error} - If the event subclass does not implement the execute method.
     */
    execute(client, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error(`Event ${this.name} is missing an execute method.`);
        });
    }
}
exports.Event = Event;
