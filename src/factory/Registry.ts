import fs from "fs";
import { Client } from "../client/Client";
import { Event } from "./Event";
import path from "path";
import { Plugin } from "./Plugin";
import { Command } from "./Command";
import { Constants } from "../config/Constants";

/**
 * A utility class that can be used to register commands, events, and more.
 */
export class Registry {
  /**
   * Indicates whether event caching is enabled.
   */
  private static eventCache = false;

  /**
   * An array to store registered events.
   */
  public static events: Event[] = [];
  public static commands: Command[] = [];

  /**
   * An array to store registered plugins.
   */
  public static plugins: Plugin[] = [];

  /**
   * Enables event caching, allowing events to be stored in the 'events' array.
   * @returns The Registry instance for method chaining.
   */
  public static allowEventCache() {
    Registry.eventCache = true;
    return Registry;
  }

  /**
   * Registers a list of events with a Discord client.
   * @param {Client} client - The Discord client instance.
   * @param {...Event[]} events - The list of events to register.
   * @returns The Registry instance for method chaining.
   */
  public static registerEvents(client: Client, ...events: Event[]) {
    for (const event of events) {
      event.once
        ? client.once(event.name, (...args: any[]) =>
            event.execute(client, ...args)
          )
        : client.on(event.name, (...args: any[]) =>
            event.execute(client, ...args)
          );
    }
    return Registry;
  }

  public static registerCommands(
    client: Client,
    options: { guildId?: string; clientId: string },
    ...commands: Command[]
  ) {
    for (const command of commands) {
      this.commands.push(command!);
      if (options.guildId) {
        fetch(
          `${Constants.API}/applications/${options.clientId}/guilds/commands`,
          {
            method: "POST",
            headers: {
              Authorization: `Bot ${client.options.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(command),
          }
        );
      } else {
        fetch(`${Constants.API}/applications/${options.clientId}/commands`, {
          method: "POST",
          headers: {
            Authorization: `Bot ${client.options.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(command),
        });
      }
    }

    return Registry;
  }

  /**
   * Registers events from files in a specified directory.
   * @param {Client} client - The Discord client instance.
   * @param {string} dir - The directory path to scan for event files.
   * @returns The Registry instance for method chaining.
   */
  public static registerEventsFromDirectory(client: Client, dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        this.registerEventsFromDirectory(client, filePath);
      } else if (
        stat.isFile() &&
        (file.endsWith(".ts") || file.endsWith(".js"))
      ) {
        const event = new (require(filePath).default)();
        this.registerEvents(client, event);
        if (this.eventCache == true) Registry.events.push(event);
      }
    }

    return Registry;
  }

  public static registerPlugins(client: Client, ...plugins: Plugin[]) {
    this.plugins = plugins;
    return Registry;
  }
}
