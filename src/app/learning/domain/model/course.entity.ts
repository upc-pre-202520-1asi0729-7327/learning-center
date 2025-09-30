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
   * Getters and setters for Course properties.
   */
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  get category(): Category | null {
    return this._category;
  }

  set category(value: Category | null) {
    this._category = value;
  }
}
