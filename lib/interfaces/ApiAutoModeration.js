"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAutoModerationTriggerKeywordPresetTypes = exports.ApiAutoModerationActionTypes = void 0;
var ApiAutoModerationActionTypes;
(function (ApiAutoModerationActionTypes) {
    ApiAutoModerationActionTypes[ApiAutoModerationActionTypes["BLOCK_MESSAGE"] = 1] = "BLOCK_MESSAGE";
    ApiAutoModerationActionTypes[ApiAutoModerationActionTypes["SEND_ALERT_MESSAGE"] = 2] = "SEND_ALERT_MESSAGE";
    ApiAutoModerationActionTypes[ApiAutoModerationActionTypes["TIMEOUT"] = 3] = "TIMEOUT";
})(ApiAutoModerationActionTypes || (exports.ApiAutoModerationActionTypes = ApiAutoModerationActionTypes = {}));
var ApiAutoModerationTriggerKeywordPresetTypes;
(function (ApiAutoModerationTriggerKeywordPresetTypes) {
    ApiAutoModerationTriggerKeywordPresetTypes[ApiAutoModerationTriggerKeywordPresetTypes["PROFANITY"] = 1] = "PROFANITY";
    ApiAutoModerationTriggerKeywordPresetTypes[ApiAutoModerationTriggerKeywordPresetTypes["SEXUAL_CONTENT"] = 2] = "SEXUAL_CONTENT";
    ApiAutoModerationTriggerKeywordPresetTypes[ApiAutoModerationTriggerKeywordPresetTypes["SLURS"] = 3] = "SLURS";
})(ApiAutoModerationTriggerKeywordPresetTypes || (exports.ApiAutoModerationTriggerKeywordPresetTypes = ApiAutoModerationTriggerKeywordPresetTypes = {}));
