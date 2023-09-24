import { ApiAttachment } from "../interfaces/ApiAttachment";

/**
 * Represents an attachment.
 */
export class Attachment {
    
    /**
     * The content type of the attachment, or null if not provided.
     * @type {string | null}
     */
    public contentType: string | null;

    /**
     * A description of the attachment, or null if not provided.
     * @type {string | null}
     */
    public description: string | null;

    /**
     * The duration of the attachment in seconds, or null if not provided.
     * @type {number | null}
     */
    public durationSecs: number | null;

    /**
     * Indicates whether the attachment is ephemeral.
     * @type {boolean}
     */
    public ephemeral: boolean;

    /**
     * The filename of the attachment.
     * @type {string}
     */
    public filename: string;

    /**
     * Flags associated with the attachment, or null if not provided.
     * @type {number | null}
     */
    public flags: number | null;

    /**
     * The height of the attachment in pixels, or null if not provided.
     * @type {number | null}
     */
    public height: number | null;

    /**
     * The unique ID of the attachment.
     * @type {string}
     */
    public id: string;

    /**
     * The proxy URL of the attachment.
     * @type {string}
     */
    public proxyUrl: string;

    /**
     * The size of the attachment in bytes.
     * @type {number}
     */
    public size: number;

    /**
     * The URL of the attachment.
     * @type {string}
     */
    public url: string;

    /**
     * The waveform data of the attachment, or null if not provided.
     * @type {string | null}
     */
    public waveform: string | null;

    /**
     * The width of the attachment in pixels, or null if not provided.
     * @type {number | null}
     */
    public width: number | null;

    /**
     * Creates a new Attachment instance.
     * @param {ApiAttachment} data - The data object containing attachment information.
     */
    constructor(data: ApiAttachment) {
        this.contentType = data.content_type ?? null;
        this.description = data.description ?? null;
        this.durationSecs = data.duration_secs ?? null;
        this.ephemeral = !!data.ephemeral;
        this.filename = data.filename;
        this.flags = data.flags ?? null;
        this.height = data.height ?? null;
        this.id = data.id;
        this.proxyUrl = data.proxy_url;
        this.size = data.size;
        this.url = data.url;
        this.waveform = data.waveform ?? null;
        this.width = data.width ?? null;
    }
}