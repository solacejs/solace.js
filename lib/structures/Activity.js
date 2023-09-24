"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
/**
 * Represents an activity.
 */
class Activity {
    /**
     * Creates a new Activity instance.
     * @param {ApiActivity} data - The data object containing activity information.
     */
    constructor(data) {
        var _a;
        this.partyId = (_a = data.party_id) !== null && _a !== void 0 ? _a : null;
        this.type = data.type;
    }
}
exports.Activity = Activity;
