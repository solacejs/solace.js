"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationInstallParams = void 0;
const Guild_1 = __importDefault(require("./Guild"));
const Team_1 = __importDefault(require("./Team"));
const User_1 = __importDefault(require("./User"));
class Application {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.approximateGuildCount = (_a = data.approximate_guild_count) !== null && _a !== void 0 ? _a : null;
        this.botPublic = data.bot_public;
        this.botRequireCodeGrant = data.bot_require_code_grant;
        this.coverImage = (_b = data.cover_image) !== null && _b !== void 0 ? _b : null;
        this.customInstallUrl = (_c = data.custom_install_url) !== null && _c !== void 0 ? _c : null;
        this.description = data.description;
        this.flags = (_d = data.flags) !== null && _d !== void 0 ? _d : null;
        this.guild = data.guild ? new Guild_1.default(data.guild) : null;
        this.guildId = (_e = data.guild_id) !== null && _e !== void 0 ? _e : null;
        this.icon = (_f = data.icon) !== null && _f !== void 0 ? _f : null;
        this.id = data.id;
        this.installParams = data.install_params ? new ApplicationInstallParams(data.install_params) : null;
        this.owner = data.owner ? new User_1.default(data.owner) : null;
        ;
        this.privacyPolicyUrl = (_g = data.privacy_policy_url) !== null && _g !== void 0 ? _g : null;
        this.rpcOrigins = (_h = data.rpc_origins) !== null && _h !== void 0 ? _h : null;
        this.roleConnectionsVerificationUrl = (_j = data.role_connections_verification_url) !== null && _j !== void 0 ? _j : null;
        this.slug = (_k = data.slug) !== null && _k !== void 0 ? _k : null;
        this.summary = data.summary;
        this.tags = (_l = data.tags) !== null && _l !== void 0 ? _l : null;
        this.team = data.team ? new Team_1.default(data.team) : null;
        this.termsOfServiceUrl = (_m = data.terms_of_service_url) !== null && _m !== void 0 ? _m : null;
        this.verifyKey = data.verify_key;
    }
}
exports.default = Application;
class ApplicationInstallParams {
    constructor(data) {
        this.permissions = data.permissions;
        this.scopes = data.scopes;
    }
}
exports.ApplicationInstallParams = ApplicationInstallParams;
