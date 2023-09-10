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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const WebsocketClient_1 = __importDefault(require("./WebsocketClient"));
const GatewayIntents_1 = __importDefault(require("../config/GatewayIntents"));
class Client extends events_1.default {
    constructor(options) {
        super();
        this.options = options;
        this.ws = null;
        this.user = null;
        if (Array.isArray(options.intents))
            this.options.intents = GatewayIntents_1.default.combineIntents(...options.intents);
        this.ws = new WebsocketClient_1.default(this);
    }
    login() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.ws) === null || _a === void 0 ? void 0 : _a.connect());
        });
    }
}
exports.default = Client;
