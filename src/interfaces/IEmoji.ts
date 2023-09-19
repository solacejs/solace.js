import IUser from "./IUser";

export default interface IEmoji {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: IUser;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}