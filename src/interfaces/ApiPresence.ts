import { ApiButtonActivity } from "./ApiButton";
import { ApiEmoji } from "./ApiEmoji";
import { ApiUser } from "./ApiUser";

export interface ApiPresence {
    activities: ApiPresenceActivity[];
    client_status: {
        desktop?: string;
        mobile?: string;
        web?: string;
    }
    guild_id: string;
    status: string;
    user: ApiUser;
}

export interface ApiPresenceActivity {
    application_id: string;
    assets?: ApiPresenceActivityAssets;
    buttons?: ApiButtonActivity[];
    created_at: number;
    details?: string | null;
    emoji?: ApiEmoji | null;
    flags?: number;
    instance?: boolean;
    name: string;
    party?: ApiPresenceParty;
    secrets?: ApiPresenceActivitySecrets;
    state?: string | null;
    timestamps?: {
        start?: number;
        end?: number;
    };
    type: number;
    url?: string | null;
}

export interface ApiPresenceActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}

export interface ApiPresenceActivitySecrets {
    join?: string;
    match?: string;
    spectate?: string;
}

export interface ApiPresenceParty {
    id?: string;
    size?: [number, number];
}