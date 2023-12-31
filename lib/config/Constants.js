"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
/**
 * A utility class containing constants related to the Discord API.
 */
class Constants {
}
exports.Constants = Constants;
_a = Constants;
/**
 * The base URL of the Discord API (v10).
 */
Constants.API = "https://discord.com/api/v10";
/**
 * The URL for accessing the Discord Gateway API, which is derived from the API base URL.
 */
Constants.GATEWAY = _a.API + "/gateway";
