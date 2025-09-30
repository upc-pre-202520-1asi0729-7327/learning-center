import {BaseEntity} from '../../../shared/domain/model/base-entity';

/**
 * Category entity
 *
 */
export class Category implements BaseEntity {
  private _id: number;
  private _name: string;

  /**
   * Constructor
   * @param category - Object containing category properties
   * @param category.id - Category ID
   * @param category.name - Category name
   *
   * @example
   * const category = new Category({ id: 1, name: 'Math' });
   */
  constructor(category: { id: number; name: string }) {
    this._id = category.id;
    this._name = category.name;
  }

  /**
   * Getters and Setters
   */
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
