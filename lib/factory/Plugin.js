"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
/**
 * Represents a plugin that can be registered and ran alongside your bot.
 */
class Plugin {
    /**
     * Set the name of the plugin.
     * @param name - The name of the plugin.
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Called when the bot is online.
     * @param client - The client instance that manages the bot.
     */
    onReady(client) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Called whenever a message is sent
     * @param client - The client instance that manages the bot.
     * @param message - The message that was sent.
     */
    onMessageCreate(client, message) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Resolves dependencies required by the plugin.
     * @param dependencies - An array of plugin names that this plugin depends on.
     * @returns An array of unresolved dependencies (plugins that need to be loaded first).
     */
    resolveDependencies(dependencies) {
        return [];
    }
    /**
     * Gets the name of the plugin
     * @returns The name of the plugin
     */
    getName() {
        return this.name;
    }
}
exports.Plugin = Plugin;
