"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogChange = exports.AuditLogEntry = void 0;
class AuditLogEntry {
    constructor(data) {
        this.actionType = data.action_type;
        this.changes = data.changes ? data.changes.map((change) => new AuditLogChange(change)) : [];
        this.id = data.id;
        this.targetId = data.target_id;
        this.userId = data.user_id;
    }
}
exports.AuditLogEntry = AuditLogEntry;
class AuditLogChange {
    constructor(data) {
        this.key = data.key;
        this.newValue = null;
        this.oldValue = null;
    }
}
exports.AuditLogChange = AuditLogChange;
