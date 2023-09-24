import IAttachment from "../interfaces/ApiAttachment";
export default class Attachment {
    contentType: string | null;
    description: string | null;
    durationSecs: number | null;
    ephemeral: boolean;
    filename: string;
    flags: number | null;
    height: number | null;
    id: string;
    proxyUrl: string;
    size: number;
    url: string;
    waveform: string | null;
    width: number | null;
    constructor(data: IAttachment);
}
