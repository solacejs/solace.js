import { ApiAuditLogChange, ApiAuditLogEntry, ApiAuditLogValue, AuditLogEvent } from "../interfaces/ApiAuditLogEntry";

export class AuditLogEntry {
    
    public actionType: AuditLogEvent;
    public changes: AuditLogChange[];
    public id: string;
    public targetId: string | null;
    public userId: string | null;


    constructor(data: ApiAuditLogEntry) {
        this.actionType = data.action_type;
        this.changes = data.changes ? data.changes.map((change) => new AuditLogChange(change)) : [];
        this.id = data.id;
        this.targetId = data.target_id;
        this.userId = data.user_id;
    }
}

export class AuditLogChange {
    
    public key: string;
    public newValue: null;
    public oldValue: null;

    constructor(data: ApiAuditLogChange) {
        this.key = data.key;
        this.newValue = null;
        this.oldValue = null;
    }
}