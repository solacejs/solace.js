import ApiUser from "./ApiUser";

export default interface ApiEmoji {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: ApiUser;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}