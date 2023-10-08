import { ApiButtonActivity } from "../interfaces/ApiButton";

export class ButtonActivity {
    
    public label: string;
    public url: string;

    constructor(data: ApiButtonActivity) {
        this.label = data.label;
        this.url = data.url
    }
}