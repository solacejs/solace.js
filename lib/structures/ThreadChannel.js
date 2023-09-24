"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Channel_1 = __importDefault(require("./Channel"));
class ThreadChannel extends Channel_1.default {
    constructor(data) {
        super(data);
        // TODO: Thread Channel
    }
}
exports.default = ThreadChannel;
