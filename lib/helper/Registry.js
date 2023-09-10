"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Registry {
    static registerEvents(client, ...args) {
        args.forEach((event) => {
            event.once ? client.once(event.name, (...args) => event.execute(client, ...args)) : client.on(event.name, (...args) => event.execute(client, ...args));
        });
    }
}
exports.default = Registry;
