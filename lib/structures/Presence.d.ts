import { ApiPresence, ApiPresenceActivity, ApiPresenceActivityAssets, ApiPresenceActivitySecrets, ApiPresenceParty } from "../interfaces/ApiPresence";
import { ButtonActivity } from "./Button";
import { Emoji } from "./Emoji";
export declare class Presence {
    activities: PresenceActivity[];
    constructor(data: ApiPresence);
}
export declare class PresenceActivity {
    applicationId: string;
    assets: PresenceActivityAssets | null;
    buttons: ButtonActivity[];
    createdAt: number;
    details: string | null;
    emoji: Emoji | null;
    flags: number | null;
    instance: boolean;
    name: string;
    party: PresenceParty | null;
    secrets: PresenceActivitySecrets | null;
    state: string | null;
    timestamps: {
        start: number | null;
        end: number | null;
    } | null;
    type: number;
    url: string | null;
    constructor(data: ApiPresenceActivity);
}
export declare class PresenceActivityAssets {
    largeImage: string | null;
    largeText: string | null;
    smallImage: string | null;
    smallText: string | null;
    constructor(data: ApiPresenceActivityAssets);
}
export declare class PresenceParty {
    id: string | null;
    size: [number, number] | [];
    constructor(data: ApiPresenceParty);
}
export declare class PresenceActivitySecrets {
    join: string | null;
    match: string | null;
    spectate: string | null;
    constructor(data: ApiPresenceActivitySecrets);
}
