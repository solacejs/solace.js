import { ApiGuildScheduledEvent, ApiGuildScheduledEventEntityMetadata, GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus } from "../interfaces/ApiGuild";
import { User } from "./User";

export class GuildScheduledEvent {

    public channelId: string | null;
    public creator: User | null;
    public creatorId: string | null;
    public description: string | null;
    public entityId: string | null;
    public entityMetadata: { location: string | null; };
    public entityType: GuildScheduledEventEntityType;
    public guildId: string;
    public id: string;
    public image: string | null;
    public name: string;
    public privacyLevel: GuildScheduledEventPrivacyLevel;
    public scheduledEndTime: string | null;
    public scheduledStartTime: string;
    public status: GuildScheduledEventStatus;
    public userCount: number | null;

    constructor(data: ApiGuildScheduledEvent) {
        this.channelId = data.channel_id;
        this.creator = data.creator ? new User(data.creator) : null;
        this.creatorId = data.creator_id ?? null;
        this.description = data.description ?? null;
        this.entityId = data.entity_id;
        this.entityMetadata = { location: data.entity_metadata.location ?? null };
        this.entityType = data.entity_type;
        this.guildId = data.guild_id;
        this.id = data.id;
        this.image = data.image ?? null;
        this.name = data.name;
        this.privacyLevel = data.privacy_level;
        this.scheduledEndTime = data.scheduled_end_time;
        this.scheduledStartTime = data.scheduled_start_time;
        this.status = data.status;
        this.userCount = data.user_count ?? null;
    }
}