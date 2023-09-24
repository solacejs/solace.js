"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Activity {
    constructor(data) {
        var _a;
        this.partyId = (_a = data.party_id) !== null && _a !== void 0 ? _a : null;
        this.type = data.type;
    }
}
exports.default = Activity;
