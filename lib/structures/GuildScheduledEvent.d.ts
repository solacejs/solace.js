import { ApiGuildScheduledEvent, GuildScheduledEventEntityType, GuildScheduledEventPrivacyLevel, GuildScheduledEventStatus } from "../interfaces/ApiGuild";
import { User } from "./User";
export declare class GuildScheduledEvent {
    channelId: string | null;
    creator: User | null;
    creatorId: string | null;
    description: string | null;
    entityId: string | null;
    entityMetadata: {
        location: string | null;
    };
    entityType: GuildScheduledEventEntityType;
    guildId: string;
    id: string;
    image: string | null;
    name: string;
    privacyLevel: GuildScheduledEventPrivacyLevel;
    scheduledEndTime: string | null;
    scheduledStartTime: string;
    status: GuildScheduledEventStatus;
    userCount: number | null;
    constructor(data: ApiGuildScheduledEvent);
}
