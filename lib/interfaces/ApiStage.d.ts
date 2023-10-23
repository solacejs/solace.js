export interface ApiStage {
    channel_id: string;
    discoverable_disabled: boolean;
    guild_id: string;
    guild_scheduled_event_id: string | null;
    id: string;
    privacy_level: ApiStagePrivacyLevels;
    topic: string;
}
export declare enum ApiStagePrivacyLevels {
    PUBLIC = 1,
    GUILD_ONLY = 2
}
