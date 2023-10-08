"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceActivitySecrets = exports.PresenceParty = exports.PresenceActivityAssets = exports.PresenceActivity = exports.Presence = void 0;
const Button_1 = require("./Button");
const Emoji_1 = require("./Emoji");
class Presence {
    constructor(data) {
        this.activities = data.activities.map((activity) => new PresenceActivity(activity));
    }
}
exports.Presence = Presence;
class PresenceActivity {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.applicationId = data.application_id;
        this.assets = data.assets ? new PresenceActivityAssets(data.assets) : null;
        ;
        this.buttons = data.buttons ? data.buttons.map((button) => new Button_1.ButtonActivity(button)) : [];
        this.createdAt = data.created_at;
        this.details = (_a = data.details) !== null && _a !== void 0 ? _a : null;
        this.emoji = data.emoji ? new Emoji_1.Emoji(data.emoji) : null;
        this.flags = (_b = data.flags) !== null && _b !== void 0 ? _b : null;
        this.instance = !!data.instance;
        this.name = data.name;
        this.party = data.party ? new PresenceParty(data.party) : null;
        this.secrets = data.secrets ? new PresenceActivitySecrets(data.secrets) : null;
        this.state = (_c = data.state) !== null && _c !== void 0 ? _c : null;
        this.timestamps = data.timestamps ? {
            start: (_d = data.timestamps.start) !== null && _d !== void 0 ? _d : null,
            end: (_e = data.timestamps.end) !== null && _e !== void 0 ? _e : null
        } : null;
        this.type = data.type;
        this.url = (_f = data.url) !== null && _f !== void 0 ? _f : null;
    }
}
exports.PresenceActivity = PresenceActivity;
class PresenceActivityAssets {
    constructor(data) {
        var _a, _b, _c, _d;
        this.largeImage = (_a = data.large_image) !== null && _a !== void 0 ? _a : null;
        this.largeText = (_b = data.large_text) !== null && _b !== void 0 ? _b : null;
        this.smallImage = (_c = data.small_image) !== null && _c !== void 0 ? _c : null;
        this.smallText = (_d = data.small_text) !== null && _d !== void 0 ? _d : null;
    }
}
exports.PresenceActivityAssets = PresenceActivityAssets;
class PresenceParty {
    constructor(data) {
        var _a, _b;
        this.id = (_a = data.id) !== null && _a !== void 0 ? _a : null;
        this.size = (_b = data.size) !== null && _b !== void 0 ? _b : [];
    }
}
exports.PresenceParty = PresenceParty;
class PresenceActivitySecrets {
    constructor(data) {
        var _a, _b, _c;
        this.join = (_a = data.join) !== null && _a !== void 0 ? _a : null;
        this.match = (_b = data.match) !== null && _b !== void 0 ? _b : null;
        this.spectate = (_c = data.spectate) !== null && _c !== void 0 ? _c : null;
    }
}
exports.PresenceActivitySecrets = PresenceActivitySecrets;
