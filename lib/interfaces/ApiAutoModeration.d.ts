export interface ApiAutoModerationRule {
    actions: ApiAutoModerationActionStructure;
    creator_id: string;
    event_type: number;
    guild_id: string;
    id: string;
    name: string;
    trigger_metadata: ApiAutoModerationTriggerMetadata;
    trigger_type: number;
}
export interface ApiAutoModerationTriggerMetadata {
    allow_list: string[];
    keyword_filter: string[];
    mention_raid_protection_enabled: boolean;
    mention_total_limit: number;
    presets: ApiAutoModerationTriggerKeywordPresetTypes[];
    regex_patterns: string[];
}
export interface ApiAutoModerationActionStructure {
    metadata?: ApiAutoModerationActionMetadata;
    type: ApiAutoModerationActionTypes;
}
export interface ApiAutoModerationActionMetadata {
    channel_id: string;
    custom_message?: string;
    duration_seconds: number;
}
export declare enum ApiAutoModerationActionTypes {
    BLOCK_MESSAGE = 1,
    SEND_ALERT_MESSAGE = 2,
    TIMEOUT = 3
}
export declare enum ApiAutoModerationTriggerKeywordPresetTypes {
    PROFANITY = 1,
    SEXUAL_CONTENT = 2,
    SLURS = 3
}
