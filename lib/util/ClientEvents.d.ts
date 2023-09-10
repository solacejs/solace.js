import Client from "../client/Client";
export default interface ClientEvents {
    ready: [client: Client];
}
