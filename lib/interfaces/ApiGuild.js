"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEventEntityType = exports.GuildScheduledEventStatus = exports.GuildScheduledEventPrivacyLevel = void 0;
var GuildScheduledEventPrivacyLevel;
(function (GuildScheduledEventPrivacyLevel) {
    GuildScheduledEventPrivacyLevel[GuildScheduledEventPrivacyLevel["GUILD_ONLY"] = 2] = "GUILD_ONLY";
})(GuildScheduledEventPrivacyLevel || (exports.GuildScheduledEventPrivacyLevel = GuildScheduledEventPrivacyLevel = {}));
var GuildScheduledEventStatus;
(function (GuildScheduledEventStatus) {
    GuildScheduledEventStatus[GuildScheduledEventStatus["SCHEDULED"] = 1] = "SCHEDULED";
    GuildScheduledEventStatus[GuildScheduledEventStatus["ACTIVE"] = 2] = "ACTIVE";
    GuildScheduledEventStatus[GuildScheduledEventStatus["COMPLETED"] = 3] = "COMPLETED";
    GuildScheduledEventStatus[GuildScheduledEventStatus["CANCELED"] = 4] = "CANCELED";
})(GuildScheduledEventStatus || (exports.GuildScheduledEventStatus = GuildScheduledEventStatus = {}));
var GuildScheduledEventEntityType;
(function (GuildScheduledEventEntityType) {
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["STAGE_INSTANCE"] = 1] = "STAGE_INSTANCE";
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["VOICE"] = 2] = "VOICE";
    GuildScheduledEventEntityType[GuildScheduledEventEntityType["EXTERNAL"] = 3] = "EXTERNAL";
})(GuildScheduledEventEntityType || (exports.GuildScheduledEventEntityType = GuildScheduledEventEntityType = {}));
