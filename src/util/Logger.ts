import { TextFormat } from "./TextFormat";

/**
 * A utility class used for logging important information to the console.
 */
export class Logger {

    public static debug(text: string) {
        console.debug(this.getDate() + " " + TextFormat.GREEN(`DEBUG: ${text}`));
    }

    public static error(text: string) {
        console.debug(this.getDate() + " " + TextFormat.RED(`ERROR: ${text}`));
    }

    public static fatal(text: string) {
        console.log(this.getDate() + " " + TextFormat.DARK_RED(TextFormat.BOLD_CODE + `FATAL: ${text}`))
    }

    public static info(text: string) {
        console.debug(this.getDate() + " " + TextFormat.AQUA(`INFO: ${text}`));
    }

    public static warn(text: string) {
        console.warn(this.getDate() + " " + TextFormat.YELLOW(TextFormat.BOLD_CODE + `WARNING: ${text}`));

    }

    private static getDate() {
        const date = new Date();
        return TextFormat.GRAY(`[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`);
    }
}