/**
 * Represents the structure of a channel category.
 */
export interface ApiChannelCategory {
  /**
   * The unique identifier of the guild (server) that the category belongs to.
   */
  guild_id: string;

  /**
   * The unique identifier of the category.
   */
  id: string;

  /**
   * The name of the category.
   */
  name: string;

  /**
   * Indicates whether the category is marked as NSFW (Not Safe for Work).
   */
  nsfw: boolean;

  /**
   * The unique identifier of the parent category, if applicable. It can be `null` if there is no parent category.
   */
  parent_id?: null;

  /**
   * An array of permission overwrites, if any, applied to this category. It can be an empty array or `null` if there are no permission overwrites.
   */
  permission_overwrites?: null[] | null;

  /**
   * The position of the category in the channel list.
   */
  position: number;

  /**
   * The type of the category, represented as a number.
   */
  type: number;
}