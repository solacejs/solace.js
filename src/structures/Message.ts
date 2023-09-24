import { ApiMessage } from "../interfaces/ApiMessage";
import { Activity } from "./Activity";
import { Application } from "./Application";
import { Attachment } from "./Attachment";
import { Embed } from "./Embed";
import { Interaction } from "./Interaction";
import {
    Reaction,
    RoleSubscriptionData
} from "./Reaction";
import {
    Sticker,
    StickerItem
} from "./Sticker";
import { ThreadChannel } from "./ThreadChannel";
import { User } from "./User";

/**
 * Represents a message on discord
 */
export class Message {

    /**
     * Sent with Rich Presence-related chat embeds
     */
    public activity: Activity | null;

    /**
     * 	Sent with Rich Presence-related chat embeds
     */
    public application: Application | null;

    /**
     * 	If the message is an Interaction or application-owned webhook, this is the id of the application
     */
    public applicationId: string | null;

    /**
     * An array of attachments (e.g., files, images) sent with the message.
     */
    public attachments: Attachment[];

    /**
     * The user who sent the message.
     */
    public author: User;

    /**
     * The unique identifier of the channel where the message was sent.
     */
    public channelId: string;

    /**
     * Components of the message, if any (e.g., buttons, action rows).
     */
    public components: any[] | null;

    /**
     * The content (text) of the message.
     */
    public content: string;

    /**
     * Timestamp of when the message was last edited, if edited.
     */
    public editedTimestamp: string | null;

    /**
     * Embeds (rich media content) included in the message.
     */
    public embeds: Embed[];

    /**
     * Flags associated with the message, if any.
     */
    public flags: number | null;

    /**
     * The id of the message.
     */
    public id: string;

    /**
     * Interaction data, if the message is part of an interaction.
     */
    public interaction: Interaction | null;

    /**
     * Indicates whether the message mentions everyone in the channel.
     */
    public mentionEveryone: boolean;

    /**
     * Channels mentioned in the message content, if any.
     */
    public mentionChannels: any[] | null;

    /**
     * Roles mentioned in the message content.
     */
    public mentionRoles: string[];

    /**
     * Users mentioned in the message content.
     */
    public mentions: User[];

    /**
     * Reference to another message, if this message is a reply or reference.
     */
    public messageReference: any | null;

    /**
     * A unique identifier for the message used for checking message delivery (nonce).
     */
    public nonce: string | number | null;

    /**
     * Indicates whether the message is pinned in the channel.
     */
    public pinned: boolean;

    /**
     * The position of the message in the channel, if applicable.
     */
    public position: number | null;

    /**
     * Reactions (e.g., emojis) added to the message, if any.
     */
    public reactions: Reaction[];

    /**
     * The message that this message references, if applicable.
     */
    public referencedMessage: any | null;

    /**
     * Subscription data related to roles, if any.
     */
    public roleSubscriptionData: RoleSubscriptionData | null;

    /**
     * Items associated with stickers sent in the message, if any.
     */
    public stickerItems: StickerItem[];

    /**
     * Stickers used in the message, if any.
     */
    public stickers: Sticker[];

    /**
     * The thread associated with the message, if part of a threaded conversation.
     */
    public thread: ThreadChannel | null;

    /**
     * Timestamp indicating when the message was sent.
     */
    public timestamp: string;

    /**
     * Indicates whether the message is a text-to-speech (TTS) message.
     */
    public tts: boolean;

    /**
     * The type of the message (e.g., DEFAULT, RECIPIENT_ADD, RECIPIENT_REMOVE	CALL, etc.).
     */
    public type: number;

    /**
     * The id of the webhook that sent the message, if applicable.
     */
    public webhookId: string | null;

    /**
     * Constructs a new Message instance.
     * @param {ApiMessage} data - The message data.
     */
    constructor(data: ApiMessage) {
        this.activity = data.activity ? new Activity(data.activity) : null;
        this.application = data.application ? new Application(data.application) : null;
        this.applicationId = data.application_id ?? null;
        this.attachments = data.attachments.map((attachment) => new Attachment(attachment));
        this.author = new User(data.author);
        this.channelId = data.channel_id ?? null;
        this.components = data.components ?? null;
        this.content = data.content;
        this.editedTimestamp = data.edited_timestamp;
        this.embeds = data.embeds ? data.embeds.map((embed) => new Embed(embed)) : [];
        this.flags = data.flags ?? null;
        this.id = data.id;
        this.interaction = data.interaction ? new Interaction(data.interaction) : null;
        this.mentionEveryone = data.mention_everyone;
        this.mentionChannels = data.mention_channels ?? null;
        this.mentionRoles = data.mention_roles;
        this.mentions = data.mentions.map((mention) => new User(mention));
        this.messageReference = data.message_reference ?? null;
        this.nonce = data.nonce ?? null;
        this.pinned = data.pinned;
        this.position = data.position ?? null;
        this.reactions = data.reactions ? data.reactions.map((reaction) => new Reaction(reaction)) : [];
        this.referencedMessage = data.referenced_message ?? null;
        this.roleSubscriptionData = data.role_subscription_data ? new RoleSubscriptionData(data.role_subscription_data) : null;
        this.stickerItems = data.sticker_items ? data.sticker_items.map((stickerItem) => new StickerItem(stickerItem)) : [];
        this.stickers = data.stickers ? data.stickers.map((sticker) => new Sticker(sticker)) : [];
        this.thread = data.thread ? new ThreadChannel(data.thread) : null;
        this.timestamp = data.timestamp;
        this.tts = data.tts;
        this.type = data.type;
        this.webhookId = data.webhook_id ?? null;
    }
}