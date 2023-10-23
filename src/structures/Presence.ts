import { ApiPresence, ApiPresenceActivity, ApiPresenceActivityAssets, ApiPresenceActivitySecrets, ApiPresenceParty } from "../interfaces/ApiPresence";
import { ButtonActivity } from "./Button";
import { Emoji } from "./Emoji";

export class Presence {
    activities: PresenceActivity[];

    constructor(data: ApiPresence) {
        this.activities = data.activities.map((activity) => new PresenceActivity(activity))
    }
}

export class PresenceActivity {

    public applicationId: string;
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
    timestamps: { start: number | null; end: number | null; } | null;
    type: number;
    url: string | null;

    constructor(data: ApiPresenceActivity) {
        this.applicationId = data.application_id;
        this.assets = data.assets ? new PresenceActivityAssets(data.assets) : null;;
        this.buttons = data.buttons ? data.buttons.map((button) => new ButtonActivity(button)) : [];
        this.createdAt = data.created_at;
        this.details = data.details ?? null;
        this.emoji = data.emoji ? new Emoji(data.emoji) : null;
        this.flags = data.flags ?? null;
        this.instance = !!data.instance;
        this.name = data.name;
        this.party = data.party ? new PresenceParty(data.party) : null;
        this.secrets = data.secrets ? new PresenceActivitySecrets(data.secrets) : null;
        this.state = data.state ?? null;
        this.timestamps = data.timestamps ? {
            start: data.timestamps.start ?? null,
            end: data.timestamps.end ?? null
        } : null;
        this.type = data.type;
        this.url = data.url ?? null;
    }
}

export class PresenceActivityAssets {

    public largeImage: string | null;
    public largeText: string | null;
    public smallImage: string | null;
    public smallText: string | null;

    constructor(data: ApiPresenceActivityAssets) {
        this.largeImage = data.large_image ?? null;
        this.largeText = data.large_text ?? null;
        this.smallImage = data.small_image ?? null;
        this.smallText = data.small_text ?? null;
    }
}

export class PresenceParty {

    public id: string | null;
    public size: [number, number] | [];

    constructor(data: ApiPresenceParty) {
        this.id = data.id ?? null;
        this.size = data.size ?? []
    }
}

export class PresenceActivitySecrets {

    public join: string | null;
    public match: string | null;
    public spectate: string | null;

    constructor(data: ApiPresenceActivitySecrets) {
        this.join = data.join ?? null;
        this.match = data.match ?? null;
        this.spectate = data.spectate ?? null;
    }
}