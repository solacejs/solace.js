import { ApiActivity } from "./ApiActivity";
import { ApiApplication } from "./ApiApplication";
import { ApiAttachment } from "./ApiAttachment";
import { ApiRoleSubscriptionData } from "./ApiRole";
import {
    ApiSticker,
    ApiStickerItem
} from "./ApiSticker";
import { ApiUser } from "./ApiUser";
import { ApiThreadChannel } from "../interfaces/ApiThreadChannel";
import { ApiEmbed } from "./ApiEmbed";
import { ApiInteraction } from "./ApiInteraction";
import { ApiReaction } from "./ApiReaction";

/**
 * Interface defining the structure of message data.
 */
export interface ApiMessage {
    /**
     * Sent with Rich Presence-related chat embeds
     */
    activity?: ApiActivity,

    /**
     * 	Sent with Rich Presence-related chat embeds
     */
    application?: ApiApplication,

    /**
     * The ID of the application associated with the message, if applicable.
     */
    application_id?: string,

    /**
     * An array of attachments (e.g., files, images) sent with the message.
     */
    attachments: ApiAttachment[],

    /**
     * The user who sent the message.
     */
    author: ApiUser,

    /**
     * The ID of the channel where the message was sent.
     */
    channel_id: string,

    /**
     * An array of components included in the message, if any.
     */
    components?: any[],

    /**
     * The content (text) of the message.
     */
    content: string,

    /**
     * The timestamp when the message was last edited, or null if it hasn't been edited.
     */
    edited_timestamp: string | null,

    /**
     * An array of embedded content within the message (e.g., rich media).
     */
    embeds: ApiEmbed[],

    /**
     * Flags associated with the message, if any.
     */
    flags?: number,

    /**
     * The unique identifier of the message.
     */
    id: string,

    /**
     * Information about an interaction associated with the message, if any.
     */
    interaction?: ApiInteraction,

    /**
     * An array of mentioned channels in the message content, if any.
     */
    mention_channels?: any[],

    /**
     * Indicates whether the message mentions everyone in the channel.
     */
    mention_everyone: boolean,

    /**
     * An array of role IDs that were mentioned in the message.
     */
    mention_roles: string[],

    /**
     * An array of users mentioned in the message.
     */
    mentions: ApiUser[],

    /**
     * Information about a referenced message, if any.
     */
    message_reference?: ApiMessageChannelMention,

    /**
     * A nonce value that can be used for verification or tracking purposes.
     */
    nonce?: number | string,

    /**
     * Indicates whether the message is pinned in the channel.
     */
    pinned: boolean,

    /**
     * The position of the message in the channel, if applicable.
     */
    position?: number,

    /**
     * An array of reactions (e.g., emojis) associated with the message, if any.
     */
    reactions?: ApiReaction[],

    /**
     * Information about a message that is being replied to, if any.
     */
    referenced_message?: ApiMessage | null,

    /**
     * Data related to role subscription (not a standard property).
     */
    role_subscription_data?: ApiRoleSubscriptionData,

    /**
     * An array of sticker items included in the message, if any.
     */
    sticker_items?: ApiStickerItem[],

    /**
     * An array of stickers included in the message, if any.
     */
    stickers?: ApiSticker[],

    /**
     * Information about a thread associated with the message, if any.
     */
    thread?: ApiThreadChannel,

    /**
     * The timestamp when the message was sent.
     */
    timestamp: string,

    /**
     * Indicates whether the message is a text-to-speech (TTS) message.
     */
    tts: boolean,

    /**
     * The type of the message (e.g., DEFAULT, RECIPIENT_ADD, RECIPIENT_REMOVE	CALL, etc.).
     */
    type: number,

    /**
     * The ID of the webhook that sent the message, if applicable.
     */
    webhook_id?: string,
}

/**
 * Interface defining the structure of a mentioned channel.
 */
export interface ApiMessageChannelMention {
    /**
     * The unique identifier of the mentioned channel.
     */
    id: string;

    /**
     * The ID of the guild (server) where the mentioned channel is located.
     */
    guild_id: string;

    /**
     * The type of the mentioned channel.
     */
    type: number;

    /**
     * The name of the mentioned channel.
     */
    name: string;
}