/**
 * A utility class that can be used to color text in your terminal.
 */
export class TextFormat {

    public static readonly AQUA_CODE = "\x1b[96m";
    public static readonly BLACK_CODE = "\x1b[30m";
    public static readonly BLUE_CODE = "\x1b[94m";
    public static readonly BOLD_CODE = "\x1b[1m";
    public static readonly DARK_AQUA_CODE = "\x1b[36m";
    public static readonly DARK_BLUE_CODE = "\x1b[34m";
    public static readonly DARK_GRAY_CODE = "\x1b[90m";
    public static readonly DARK_GREEN_CODE = "\x1b[32m";
    public static readonly DARK_PURPLE_CODE = "\x1b[35m";
    public static readonly DARK_RED_CODE = "\x1b[31m";
    public static readonly GOLD_CODE = "\x1b[33m";
    public static readonly GRAY_CODE = "\x1b[37m";
    public static readonly GREEN_CODE = "\x1b[92m";
    public static readonly ITALIC_CODE = "\x1b[3m";
    public static readonly LIGHT_PURPLE_CODE = "\x1b[95m";
    public static readonly MAGIC_CODE = "\x1b[5m";
    public static readonly RED_CODE = "\x1b[91m";
    public static readonly RESET_CODE = "\x1b[0m";
    public static readonly STRIKETHROUGH_CODE = "\x1b[9m";
    public static readonly UNDERLINE_CODE = "\x1b[4m";
    public static readonly WHITE_CODE = "\x1b[97m";
    public static readonly YELLOW_CODE = "\x1b[93m";

    public static AQUA(text: string) {
        return this.RESET_CODE + this.AQUA_CODE + text + this.RESET_CODE;
    }

    public static BLACK(text: string) {
        return this.RESET_CODE + this.BLACK_CODE + text + this.RESET_CODE;
    }

    public static BLUE(text: string) {
        return this.RESET_CODE + this.BLUE_CODE + text + this.RESET_CODE;
    }

    public static BOLD(text: string) {
        return this.RESET_CODE + this.BOLD_CODE + text + this.RESET_CODE;
    }

    public static DARK_AQUA(text: string) {
        return this.RESET_CODE + this.DARK_AQUA_CODE + text + this.RESET_CODE;
    }

    public static DARK_BLUE(text: string) {
        return this.RESET_CODE + this.DARK_BLUE_CODE + text + this.RESET_CODE;
    }

    public static DARK_GRAY(text: string) {
        return this.RESET_CODE + this.DARK_GRAY + text + this.RESET_CODE;
    }

    public static DARK_GREEN(text: string) {
        return this.RESET_CODE + this.DARK_GREEN_CODE + text + this.RESET_CODE;
    }

    public static DARK_PURPLE(text: string) {
        return this.RESET_CODE + this.DARK_PURPLE_CODE + text + this.RESET_CODE;
    }

    public static DARK_RED(text: string) {
        return this.RESET_CODE + this.DARK_RED_CODE + text + this.RESET_CODE;
    }

    public static GOLD(text: string) {
        return this.RESET_CODE + this.GOLD_CODE + text + this.RESET_CODE;
    }

    public static GRAY(text: string) {
        return this.RESET_CODE + this.GRAY_CODE + text + this.RESET_CODE;
    }

    public static GREEN(text: string) {
        return this.RESET_CODE + this.GREEN_CODE + text + this.RESET_CODE;
    }

    public static ITALIC(text: string) {
        return this.RESET_CODE + this.ITALIC_CODE + text + this.RESET_CODE;
    }

    public static LIGHT_PURPLE(text: string) {
        return this.RESET_CODE + this.LIGHT_PURPLE_CODE + text + this.RESET_CODE;
    }

    public static MAGIC(text: string) {
        return this.RESET_CODE + this.MAGIC_CODE + text + this.RESET_CODE;
    }

    public static RED(text: string) {
        return this.RED_CODE + text + this.RESET_CODE;
    }

    public static RESET(text: string) {
        return this.RESET_CODE + text + this.RESET_CODE;
    }

    public static STRIKETHROUGH(text: string) {
        return this.RESET_CODE + this.STRIKETHROUGH_CODE + text + this.RESET_CODE;
    }

    public static UNDERLINE(text: string) {
        return this.RESET_CODE + this.UNDERLINE_CODE + text + this.RESET_CODE;
    }

    public static WHITE(text: string) {
        return this.RESET_CODE + this.WHITE_CODE + text + this.RESET_CODE;
    }

    public static YELLOW(text: string) {
        return this.RESET_CODE + this.YELLOW_CODE + text + this.RESET_CODE;
    }

    public static translateAlternateColorCodes(charCode: string, text: string) {
        const regexPattern = new RegExp(`${charCode}(\s*[a-zA-Z]+\s*)`, "g");

        return text.replace(regexPattern, (match, colorName) => {
            const arr = colorName.split(" ");
            switch (arr[0]) {
                case "red":
                    return this.RED_CODE;
                default:
                    return match;
            }
        })
    }
}