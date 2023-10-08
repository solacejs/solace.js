import { ApiAuditLogChange, ApiAuditLogEntry, AuditLogEvent } from "../interfaces/ApiAuditLogEntry";
export declare class AuditLogEntry {
    actionType: AuditLogEvent;
    changes: AuditLogChange[];
    id: string;
    targetId: string | null;
    userId: string | null;
    constructor(data: ApiAuditLogEntry);
}
export declare class AuditLogChange {
    key: string;
    newValue: null;
    oldValue: null;
    constructor(data: ApiAuditLogChange);
}
