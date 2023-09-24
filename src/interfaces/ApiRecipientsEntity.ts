/**
 * Represents the structure of a user recipient entity.
 */
export interface ApiRecipientsEntity {
    /**
     * The avatar URL of the user.
     */
    avatar: string;

    /**
     * The discriminator of the user (a four-digit identifier following the username).
     */
    discriminator: string;

    /**
     * The unique identifier (ID) of the user.
     */
    id: string;

    /**
     * The username of the user.
     */
    username: string;
}
