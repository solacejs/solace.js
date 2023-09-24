/**
 * Interface defining the structure of an attachment, such as files or media, within a message.
 */
export interface ApiAttachment {
    /**
     * The content type of the attachment, if applicable.
     */
    content_type?: string;
    /**
     * A description of the attachment, if provided.
     */
    description?: string;
    /**
     * The duration of the attachment in seconds, if applicable.
     */
    duration_secs?: number;
    /**
     * Indicates whether the attachment is ephemeral.
     */
    ephemeral?: boolean;
    /**
     * The filename of the attachment.
     */
    filename: string;
    /**
     * Flags associated with the attachment, if any.
     */
    flags?: number;
    /**
     * The height of the attachment, if applicable.
     */
    height?: number | null;
    /**
     * The unique identifier of the attachment.
     */
    id: string;
    /**
     * The proxy URL of the attachment.
     */
    proxy_url: string;
    /**
     * The size of the attachment in bytes.
     */
    size: number;
    /**
     * The URL to access the attachment.
     */
    url: string;
    /**
     * The waveform data of the attachment, if applicable.
     */
    waveform?: string;
    /**
     * The width of the attachment, if applicable.
     */
    width?: number | null;
}
