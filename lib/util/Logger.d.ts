/**
 * A utility class used for logging important information to the console.
 */
export declare class Logger {
    static debug(text: string): void;
    static error(text: string): void;
    static fatal(text: string): void;
    static info(text: string): void;
    static warn(text: string): void;
    private static getDate;
}
