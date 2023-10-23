"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildScheduledEvent = void 0;
const User_1 = require("./User");
class GuildScheduledEvent {
    constructor(data) {
        var _a, _b, _c, _d, _e;
        this.channelId = data.channel_id;
        this.creator = data.creator ? new User_1.User(data.creator) : null;
        this.creatorId = (_a = data.creator_id) !== null && _a !== void 0 ? _a : null;
        this.description = (_b = data.description) !== null && _b !== void 0 ? _b : null;
        this.entityId = data.entity_id;
        this.entityMetadata = { location: (_c = data.entity_metadata.location) !== null && _c !== void 0 ? _c : null };
        this.entityType = data.entity_type;
        this.guildId = data.guild_id;
        this.id = data.id;
        this.image = (_d = data.image) !== null && _d !== void 0 ? _d : null;
        this.name = data.name;
        this.privacyLevel = data.privacy_level;
        this.scheduledEndTime = data.scheduled_end_time;
        this.scheduledStartTime = data.scheduled_start_time;
        this.status = data.status;
        this.userCount = (_e = data.user_count) !== null && _e !== void 0 ? _e : null;
    }
}
exports.GuildScheduledEvent = GuildScheduledEvent;
