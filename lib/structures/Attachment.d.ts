import { ApiAttachment } from "../interfaces/ApiAttachment";
/**
 * Represents an attachment.
 */
export declare class Attachment {
    /**
     * The content type of the attachment, or null if not provided.
     * @type {string | null}
     */
    contentType: string | null;
    /**
     * A description of the attachment, or null if not provided.
     * @type {string | null}
     */
    description: string | null;
    /**
     * The duration of the attachment in seconds, or null if not provided.
     * @type {number | null}
     */
    durationSecs: number | null;
    /**
     * Indicates whether the attachment is ephemeral.
     * @type {boolean}
     */
    ephemeral: boolean;
    /**
     * The filename of the attachment.
     * @type {string}
     */
    filename: string;
    /**
     * Flags associated with the attachment, or null if not provided.
     * @type {number | null}
     */
    flags: number | null;
    /**
     * The height of the attachment in pixels, or null if not provided.
     * @type {number | null}
     */
    height: number | null;
    /**
     * The unique ID of the attachment.
     * @type {string}
     */
    id: string;
    /**
     * The proxy URL of the attachment.
     * @type {string}
     */
    proxyUrl: string;
    /**
     * The size of the attachment in bytes.
     * @type {number}
     */
    size: number;
    /**
     * The URL of the attachment.
     * @type {string}
     */
    url: string;
    /**
     * The waveform data of the attachment, or null if not provided.
     * @type {string | null}
     */
    waveform: string | null;
    /**
     * The width of the attachment in pixels, or null if not provided.
     * @type {number | null}
     */
    width: number | null;
    /**
     * Creates a new Attachment instance.
     * @param {ApiAttachment} data - The data object containing attachment information.
     */
    constructor(data: ApiAttachment);
}
