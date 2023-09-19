"use client";
import CodeBlock from "@/components/CodeBlock";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.title = "Solace.js";
  })

  return (
    <main className='w-full h-full flex justify-center'>
      <div className="w-full p-2 md:w-[50rem] md:p-0 h-full">
        <h1>Solace.js</h1>
        <p>Solace.js is an alternative to eris and discord.js, a nodejs wrapper for interfacing with discord. The goal of solace.js is to make discord bot development faster. The project structure is sort of similar to discord.js making it easy to move to. With solace.js you can get work done in a faster way.</p>
        <h2>Installation</h2>
        <CodeBlock language="bash">
          {`$ npm install solace.js
          
$ yarn add solace.js
          
$ pnpm add solace.js`}
        </CodeBlock>

        <h2>Usage</h2>
        <CodeBlock language="typescript">
          {`import { Client, Event, GatewayIntents, Registry, SolaceIntents } from "solace.js";
import ReadyEvent from "./events/ReadyEvent";

/**
  * You can use intent groups such as SolaceIntents or just use an array of GatewayIntents
**/
const client = new Client({ token: "BOT_TOKEN", intents: SolaceIntents.GENERAL });

const events: Event[] = [];

Registry.registerEvents(client, new ReadyEvent());

client.login();`}
        </CodeBlock>

        <p className="mt-2">Ready Event Example</p>
        <CodeBlock language="typescript">
          {`import { Client, Event } from "solace.js";
          
export default class ReadyEvent extends Event {
            
  constructor() {
    super("ready", true);
  }
  
  public async execute(client: Client) {
    console.log(client.user!.username, "is online!");
  }
}`}
        </CodeBlock>
        <div className="h-[1rem] w-full"></div>
      </div>
    </main>
  )
}
