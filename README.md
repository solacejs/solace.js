# Solace.js

Solace.js is an alternative to eris and discord.js, a nodejs wrapper for interfacing with discord. The goal of solace.js is to make discord bot development faster. The project structure is sort of similar to discord.js making it easy to move to. The solace.js you can get work done in a faster way.

## Installation
```
npm install discord.js
yarn add discord.js
pnpm add discord.js
```

## Usage
```ts
import { Client, Event, GatewayIntents, Registry, SolaceIntents } from "solace.js";
import ReadyEvent from "./events/ReadyEvent";

/**
 * You can use intent groups such as SolaceIntents or just use an array of GatewayIntents
**/
const client = new Client({ token: "BOT_TOKEN", intents: SolaceIntents.GENERAL });

const events: Event[] = [];

Registry.registerEvents(client, new ReadyEvent());

client.login();
```
`Ready Event example`
```ts
import { Client, Event } from "solace.js";

export default class ReadyEvent extends Event {

    constructor() {
        super("ready", true);
    }

    public async execute(client: Client) {
        console.log(client.user!.username, "is online!");
    }
}
```