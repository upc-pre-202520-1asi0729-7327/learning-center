import {BaseEntity} from '../../../shared/domain/model/base-entity';

/**
 * Represents a user entity in the system.
 * Implements the BaseEntity interface.
 */
export class User implements BaseEntity {
  /**
   * Sets the username of the user.
   * @param value The new username.
   */
  set username(value: string) {
    this._username = value;
  }

  /**
   * Sets the ID of the user.
   * @param value The new ID.
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Gets the username of the user.
   * @returns The username.
   */
  get username(): string {
    return this._username;
  }

  /**
   * Gets the ID of the user.
   * @returns The ID.
   */
  get id(): number {
    return this._id;
  }

  private _id: number;
  private _username: string;

  /**
   * Creates a new User instance.
   * @param user An object containing the user's ID and username.
   */
  constructor(user:{id: number, username: string}) {
    this._id = user.id;
    this._username = user.username;
  }
}
