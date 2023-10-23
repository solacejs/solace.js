import { ApiAccount } from "./ApiAccount";
import { ApiApplication } from "./ApiApplication";
import { ApiUser } from "./ApiUser";
import { OAuth2Scope } from "./OAuth2Scope";
export interface ApiIntegration {
    account: ApiAccount;
    application?: ApiApplication;
    enable_emoticons?: boolean;
    enabled: boolean;
    expire_behavior?: ApiIntegrationExpireBehaviors;
    expire_grace_period?: number;
    id: string;
    name: string;
    revoked?: boolean;
    role_id?: string;
    scopes?: OAuth2Scope[];
    subscriber_count?: number;
    synced_at?: string;
    syncing?: boolean;
    type: string;
    user?: ApiUser;
}
export declare enum ApiIntegrationExpireBehaviors {
    REMOVE_ROLE = 1,
    KICK = 2
}
