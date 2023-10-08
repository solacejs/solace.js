"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const TextFormat_1 = require("./TextFormat");
/**
 * A utility class used for logging important information to the console.
 */
class Logger {
    static debug(text) {
        console.debug(this.getDate() + " " + TextFormat_1.TextFormat.GREEN(`DEBUG: ${text}`));
    }
    static error(text) {
        console.debug(this.getDate() + " " + TextFormat_1.TextFormat.RED(`ERROR: ${text}`));
    }
    static fatal(text) {
        console.log(this.getDate() + " " + TextFormat_1.TextFormat.DARK_RED(TextFormat_1.TextFormat.BOLD_CODE + `FATAL: ${text}`));
    }
    static info(text) {
        console.debug(this.getDate() + " " + TextFormat_1.TextFormat.AQUA(`INFO: ${text}`));
    }
    static warn(text) {
        console.warn(this.getDate() + " " + TextFormat_1.TextFormat.YELLOW(TextFormat_1.TextFormat.BOLD_CODE + `WARNING: ${text}`));
    }
    static getDate() {
        const date = new Date();
        return TextFormat_1.TextFormat.GRAY(`[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`);
    }
}
exports.Logger = Logger;
