"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../structures/User"));
class EventHandler {
    static READY(client, data) {
        client.user = new User_1.default(data.user);
        client.emit("ready", client);
    }
    static MESSAGE_CREATE(client, data) {
        client.emit("messageCreate", data);
    }
}
exports.default = EventHandler;
