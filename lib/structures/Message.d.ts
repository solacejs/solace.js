import { Client } from "../client/Client";
import { ApiMessage } from "../interfaces/ApiMessage";
import { MessageOptions } from "../interfaces/MessageOptions";
import { Activity } from "./Activity";
import { Application } from "./Application";
import { Attachment } from "./Attachment";
import { Embed } from "./Embed";
import { Guild } from "./Guild";
import { GuildTextChannel } from "./GuildTextChannel";
import { Interaction } from "./Interaction";
import { Reaction, RoleSubscriptionData } from "./Reaction";
import { Sticker, StickerItem } from "./Sticker";
import { ThreadChannel } from "./ThreadChannel";
import { User } from "./User";
/**
 * Represents a message on discord
 */
export declare class Message {
    /**
     * Sent with Rich Presence-related chat embeds
     */
    activity: Activity | null;
    /**
     * 	Sent with Rich Presence-related chat embeds
     */
    application: Application | null;
    /**
     * 	If the message is an Interaction or application-owned webhook, this is the id of the application
     */
    applicationId: string | null;
    /**
     * An array of attachments (e.g., files, images) sent with the message.
     */
    attachments: Attachment[];
    /**
     * The user who sent the message.
     */
    author: User;
    /**
     * The channel the message was sent in.
     */
    channel?: GuildTextChannel;
    /**
     * The unique identifier of the channel where the message was sent.
     */
    channelId: string;
    client: Client;
    /**
     * Components of the message, if any (e.g., buttons, action rows).
     */
    components: any[] | null;
    /**
     * The content (text) of the message.
     */
    content: string;
    /**
     * Timestamp of when the message was last edited, if edited.
     */
    editedTimestamp: string | null;
    /**
     * Embeds (rich media content) included in the message.
     */
    embeds: Embed[];
    /**
     * Flags associated with the message, if any.
     */
    flags: number | null;
    /**
     * The guild the message was sent in.
     */
    guild?: Guild;
    /**
     * The id of the guild/server.
     */
    guildId?: string;
    /**
     * The id of the message.
     */
    id: string;
    /**
     * Interaction data, if the message is part of an interaction.
     */
    interaction: Interaction | null;
    /**
     * Indicates whether the message mentions everyone in the channel.
     */
    mentionEveryone: boolean;
    /**
     * Channels mentioned in the message content, if any.
     */
    mentionChannels: any[] | null;
    /**
     * Roles mentioned in the message content.
     */
    mentionRoles: string[];
    /**
     * Users mentioned in the message content.
     */
    mentions: User[];
    /**
     * Reference to another message, if this message is a reply or reference.
     */
    messageReference: any | null;
    /**
     * A unique identifier for the message used for checking message delivery (nonce).
     */
    nonce: string | number | null;
    /**
     * Indicates whether the message is pinned in the channel.
     */
    pinned: boolean;
    /**
     * The position of the message in the channel, if applicable.
     */
    position: number | null;
    /**
     * Reactions (e.g., emojis) added to the message, if any.
     */
    reactions: Reaction[];
    /**
     * The message that this message references, if applicable.
     */
    referencedMessage: any | null;
    /**
     * Subscription data related to roles, if any.
     */
    roleSubscriptionData: RoleSubscriptionData | null;
    /**
     * Items associated with stickers sent in the message, if any.
     */
    stickerItems: StickerItem[];
    /**
     * Stickers used in the message, if any.
     */
    stickers: Sticker[];
    /**
     * The thread associated with the message, if part of a threaded conversation.
     */
    thread: ThreadChannel | null;
    /**
     * Timestamp indicating when the message was sent.
     */
    timestamp: string;
    /**
     * Indicates whether the message is a text-to-speech (TTS) message.
     */
    tts: boolean;
    /**
     * The type of the message (e.g., DEFAULT, RECIPIENT_ADD, RECIPIENT_REMOVE	CALL, etc.).
     */
    type: number;
    /**
     * The id of the webhook that sent the message, if applicable.
     */
    webhookId: string | null;
    /**
     * Constructs a new Message instance.
     * @param {ApiMessage} data - The message data.
     */
    constructor(data: ApiMessage);
    reply(options: string | MessageOptions): Promise<void>;
}
