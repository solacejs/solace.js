export default interface IThreadChannel {
    guild_id: string;
    id: string;
    last_message_id: string | null;
    member_count: number;
    message_count: number;
    name: string | null;
    owner_id: string;
    parent_id: string | null;
    rate_limit_per_user: number;
    thread_metadata: ThreadMetadata;
    total_message_sent: number;
    type: number;
}

export interface ThreadMetadata {
    archive_timestamp: string;
    archived: boolean;
    auto_archive_duration: number;
    locked: boolean;
}
