export default interface ApiGuildAnnouncementChannel {
    id: string;
    guild_id: string;
    name: string;
    type: number;
    position: number;
    permission_overwrites?: (null)[] | null;
    nsfw: boolean;
    topic: string;
    last_message_id: string;
    parent_id: string;
    default_auto_archive_duration: number;
  }
  