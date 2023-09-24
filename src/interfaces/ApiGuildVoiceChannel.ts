export default interface ApiGuildVoiceChannel {
    id: string;
    guild_id: string;
    name: string;
    type: 2;
    position: number;
    parent_id: string | null;
    bitrate: number;
    user_limit: number;
    rtc_region: string | null;
    permission_overwrites: any[];
    rate_limit_per_user: number;
    nsfw: boolean;
  }