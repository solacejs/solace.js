export default interface ApiGuildTextChannel {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    position: number;
    permission_overwrites?: (null)[] | null;
    rate_limit_per_user: number;
    nsfw: boolean;
    topic: string;
    last_message_id: string;
    parent_id: string;
    default_auto_archive_duration: number;
}
