import GatewayIntents from "../config/GatewayIntents";
export default interface ClientOptions {
    token: string;
    intents: GatewayIntents | GatewayIntents[] | number;
}
