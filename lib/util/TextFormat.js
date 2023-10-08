"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFormat = void 0;
/**
 * A utility class that can be used to color text in your terminal.
 */
class TextFormat {
    static AQUA(text) {
        return this.RESET_CODE + this.AQUA_CODE + text + this.RESET_CODE;
    }
    static BLACK(text) {
        return this.RESET_CODE + this.BLACK_CODE + text + this.RESET_CODE;
    }
    static BLUE(text) {
        return this.RESET_CODE + this.BLUE_CODE + text + this.RESET_CODE;
    }
    static BOLD(text) {
        return this.RESET_CODE + this.BOLD_CODE + text + this.RESET_CODE;
    }
    static DARK_AQUA(text) {
        return this.RESET_CODE + this.DARK_AQUA_CODE + text + this.RESET_CODE;
    }
    static DARK_BLUE(text) {
        return this.RESET_CODE + this.DARK_BLUE_CODE + text + this.RESET_CODE;
    }
    static DARK_GRAY(text) {
        return this.RESET_CODE + this.DARK_GRAY + text + this.RESET_CODE;
    }
    static DARK_GREEN(text) {
        return this.RESET_CODE + this.DARK_GREEN_CODE + text + this.RESET_CODE;
    }
    static DARK_PURPLE(text) {
        return this.RESET_CODE + this.DARK_PURPLE_CODE + text + this.RESET_CODE;
    }
    static DARK_RED(text) {
        return this.RESET_CODE + this.DARK_RED_CODE + text + this.RESET_CODE;
    }
    static GOLD(text) {
        return this.RESET_CODE + this.GOLD_CODE + text + this.RESET_CODE;
    }
    static GRAY(text) {
        return this.RESET_CODE + this.GRAY_CODE + text + this.RESET_CODE;
    }
    static GREEN(text) {
        return this.RESET_CODE + this.GREEN_CODE + text + this.RESET_CODE;
    }
    static ITALIC(text) {
        return this.RESET_CODE + this.ITALIC_CODE + text + this.RESET_CODE;
    }
    static LIGHT_PURPLE(text) {
        return this.RESET_CODE + this.LIGHT_PURPLE_CODE + text + this.RESET_CODE;
    }
    static MAGIC(text) {
        return this.RESET_CODE + this.MAGIC_CODE + text + this.RESET_CODE;
    }
    static RED(text) {
        return this.RED_CODE + text + this.RESET_CODE;
    }
    static RESET(text) {
        return this.RESET_CODE + text + this.RESET_CODE;
    }
    static STRIKETHROUGH(text) {
        return this.RESET_CODE + this.STRIKETHROUGH_CODE + text + this.RESET_CODE;
    }
    static UNDERLINE(text) {
        return this.RESET_CODE + this.UNDERLINE_CODE + text + this.RESET_CODE;
    }
    static WHITE(text) {
        return this.RESET_CODE + this.WHITE_CODE + text + this.RESET_CODE;
    }
    static YELLOW(text) {
        return this.RESET_CODE + this.YELLOW_CODE + text + this.RESET_CODE;
    }
    static translateAlternateColorCodes(charCode, text) {
        const regexPattern = new RegExp(`${charCode}(\s*[a-zA-Z]+\s*)`, "g");
        return text.replace(regexPattern, (match, colorName) => {
            const arr = colorName.split(" ");
            switch (arr[0]) {
                case "red":
                    return this.RED_CODE;
                default:
                    return match;
            }
        });
    }
}
exports.TextFormat = TextFormat;
TextFormat.AQUA_CODE = "\x1b[96m";
TextFormat.BLACK_CODE = "\x1b[30m";
TextFormat.BLUE_CODE = "\x1b[94m";
TextFormat.BOLD_CODE = "\x1b[1m";
TextFormat.DARK_AQUA_CODE = "\x1b[36m";
TextFormat.DARK_BLUE_CODE = "\x1b[34m";
TextFormat.DARK_GRAY_CODE = "\x1b[90m";
TextFormat.DARK_GREEN_CODE = "\x1b[32m";
TextFormat.DARK_PURPLE_CODE = "\x1b[35m";
TextFormat.DARK_RED_CODE = "\x1b[31m";
TextFormat.GOLD_CODE = "\x1b[33m";
TextFormat.GRAY_CODE = "\x1b[37m";
TextFormat.GREEN_CODE = "\x1b[92m";
TextFormat.ITALIC_CODE = "\x1b[3m";
TextFormat.LIGHT_PURPLE_CODE = "\x1b[95m";
TextFormat.MAGIC_CODE = "\x1b[5m";
TextFormat.RED_CODE = "\x1b[91m";
TextFormat.RESET_CODE = "\x1b[0m";
TextFormat.STRIKETHROUGH_CODE = "\x1b[9m";
TextFormat.UNDERLINE_CODE = "\x1b[4m";
TextFormat.WHITE_CODE = "\x1b[97m";
TextFormat.YELLOW_CODE = "\x1b[93m";
