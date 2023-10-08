/**
 * A utility class that can be used to color text in your terminal.
 */
export declare class TextFormat {
    static readonly AQUA_CODE = "\u001B[96m";
    static readonly BLACK_CODE = "\u001B[30m";
    static readonly BLUE_CODE = "\u001B[94m";
    static readonly BOLD_CODE = "\u001B[1m";
    static readonly DARK_AQUA_CODE = "\u001B[36m";
    static readonly DARK_BLUE_CODE = "\u001B[34m";
    static readonly DARK_GRAY_CODE = "\u001B[90m";
    static readonly DARK_GREEN_CODE = "\u001B[32m";
    static readonly DARK_PURPLE_CODE = "\u001B[35m";
    static readonly DARK_RED_CODE = "\u001B[31m";
    static readonly GOLD_CODE = "\u001B[33m";
    static readonly GRAY_CODE = "\u001B[37m";
    static readonly GREEN_CODE = "\u001B[92m";
    static readonly ITALIC_CODE = "\u001B[3m";
    static readonly LIGHT_PURPLE_CODE = "\u001B[95m";
    static readonly MAGIC_CODE = "\u001B[5m";
    static readonly RED_CODE = "\u001B[91m";
    static readonly RESET_CODE = "\u001B[0m";
    static readonly STRIKETHROUGH_CODE = "\u001B[9m";
    static readonly UNDERLINE_CODE = "\u001B[4m";
    static readonly WHITE_CODE = "\u001B[97m";
    static readonly YELLOW_CODE = "\u001B[93m";
    static AQUA(text: string): string;
    static BLACK(text: string): string;
    static BLUE(text: string): string;
    static BOLD(text: string): string;
    static DARK_AQUA(text: string): string;
    static DARK_BLUE(text: string): string;
    static DARK_GRAY(text: string): string;
    static DARK_GREEN(text: string): string;
    static DARK_PURPLE(text: string): string;
    static DARK_RED(text: string): string;
    static GOLD(text: string): string;
    static GRAY(text: string): string;
    static GREEN(text: string): string;
    static ITALIC(text: string): string;
    static LIGHT_PURPLE(text: string): string;
    static MAGIC(text: string): string;
    static RED(text: string): string;
    static RESET(text: string): string;
    static STRIKETHROUGH(text: string): string;
    static UNDERLINE(text: string): string;
    static WHITE(text: string): string;
    static YELLOW(text: string): string;
    static translateAlternateColorCodes(charCode: string, text: string): string;
}
