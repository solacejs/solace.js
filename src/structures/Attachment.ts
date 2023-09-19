import IAttachment from "../interfaces/IAttachment";

export default class Attachment {
    
    public contentType: string | null;
    public description: string | null;
    public durationSecs: number | null;
    public ephemeral: boolean;
    public filename: string;
    public flags: number | null;
    public height: number | null;
    public id: string;
    public proxyUrl: string;
    public size: number;
    public url: string;
    public waveform: string | null;
    public width: number | null;

    constructor(data: IAttachment) {
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