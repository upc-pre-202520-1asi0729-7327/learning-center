import {BaseEntity} from '../../../shared/domain/model/base-entity';
import {Category} from './category.entity';

/**
 * Course entity representing a course in the learning platform.
 * Includes properties like id, title, description, categoryId, and an optional Category object.
 */
export class Course implements BaseEntity {
  private _id: number;
  private _title: string;
  private _description: string;
  private _categoryId: number; // duration in hours
  private _category: Category | null;

  /**
   * Constructor to initialize a Course entity.
   * @param course - Object containing course properties.
   * @param course.id - Unique identifier for the course.
   * @param course.title - Title of the course.
   * @param course.description - Description of the course.
   * @param course.categoryId - Identifier for the category the course belongs to.
   * @param course.category - Optional Category object associated with the course.
   */
  constructor(course: { id: number; title: string; description: string; categoryId: number; category?: Category | null }) {
    this._id = course.id;
    this._title = course.title;
    this._description = course.description;
    this._categoryId = course.categoryId;
    this._category = course.category ?? null;
  }

  /**
   * Gets the ID of the course.
   * @returns The course ID.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Sets the ID of the course.
   * @param value The new ID.
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Gets the title of the course.
   * @returns The course title.
   */
  get title(): string {
    return this._title;
  }

  /**
   * Sets the title of the course.
   * @param value The new title.
   */
  set title(value: string) {
    this._title = value;
  }

  /**
   * Gets the description of the course.
   * @returns The course description.
   */
  get description(): string {
    return this._description;
  }

  /**
   * Sets the description of the course.
   * @param value The new description.
   */
  set description(value: string) {
    this._description = value;
  }

  /**
   * Gets the category ID of the course.
   * @returns The category ID.
   */
  get categoryId(): number {
    return this._categoryId;
  }

  /**
   * Sets the category ID of the course.
   * @param value The new category ID.
   */
  set categoryId(value: number) {
    this._categoryId = value;
  }

  /**
   * Gets the associated category of the course.
   * @returns The category object or null.
   */
  get category(): Category | null {
    return this._category;
  }

  /**
   * Sets the associated category of the course.
   * @param value The new category or null.
   */
  set category(value: Category | null) {
    this._category = value;
  }
}
