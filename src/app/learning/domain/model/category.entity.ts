import {BaseEntity} from '../../../shared/domain/model/base-entity';

/**
 * Represents a category entity in the learning system.
 * Implements the BaseEntity interface.
 */
export class Category implements BaseEntity {
  private _id: number;
  private _name: string;

  /**
   * Creates a new Category instance.
   * @param category An object containing the category's ID and name.
   */
  constructor(category: { id: number; name: string }) {
    this._id = category.id;
    this._name = category.name;
  }

  /**
   * Gets the ID of the category.
   * @returns The category ID.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Sets the ID of the category.
   * @param value The new ID.
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Gets the name of the category.
   * @returns The category name.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Sets the name of the category.
   * @param value The new name.
   */
  set name(value: string) {
    this._name = value;
  }
}
