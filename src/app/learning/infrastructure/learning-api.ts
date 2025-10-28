import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {CoursesApiEndpoint} from './courses-api-endpoint';
import {CategoriesApiEndpoint} from './categories-api-endpoint';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../domain/model/course.entity';
import {Category} from '../domain/model/category.entity';

/**
 * Service for handling API operations related to learning resources (courses and categories).
 * Extends BaseApi and provides high-level methods for CRUD operations on courses and categories.
 */
@Injectable({providedIn: 'root'})
export class LearningApi extends BaseApi {
  private readonly coursesEndpoint: CoursesApiEndpoint;
  private readonly categoriesEndpoint: CategoriesApiEndpoint;

  /**
   * Creates an instance of LearningApi.
   * @param http - The HttpClient for making HTTP requests.
   */
  constructor(http: HttpClient) {
    super();
    this.categoriesEndpoint = new CategoriesApiEndpoint(http);
    this.coursesEndpoint = new CoursesApiEndpoint(http);
  }

  /**
   * Retrieves all courses.
   * @returns An Observable emitting an array of Course entities.
   */
  getCourses(): Observable<Course[]> {
    return this.coursesEndpoint.getAll();
  }

  /**
   * Retrieves a single course by ID.
   * @param id - The ID of the course to retrieve.
   * @returns An Observable emitting the Course entity.
   */
  getCourse(id: number): Observable<Course> {
    return this.coursesEndpoint.getById(id);
  }

  /**
   * Creates a new course.
   * @param course - The Course entity to create.
   * @returns An Observable emitting the created Course entity.
   */
  createCourse(course: Course): Observable<Course> {
    return this.coursesEndpoint.create(course);
  }

  /**
   * Updates an existing course.
   * @param course - The Course entity to update.
   * @returns An Observable emitting the updated Course entity.
   */
  updateCourse(course: Course): Observable<Course> {
    return this.coursesEndpoint.update(course, course.id);
  }

  /**
   * Deletes a course by ID.
   * @param id - The ID of the course to delete.
   * @returns An Observable emitting void upon successful deletion.
   */
  deleteCourse(id: number): Observable<void> {
    return this.coursesEndpoint.delete(id);
  }

  /**
   * Retrieves all categories.
   * @returns An Observable emitting an array of Category entities.
   */
  getCategories(): Observable<Category[]> {
    return this.categoriesEndpoint.getAll();
  }

  /**
   * Retrieves a single category by ID.
   * @param id - The ID of the category to retrieve.
   * @returns An Observable emitting the Category entity.
   */
  getCategory(id: number): Observable<Category> {
    return this.categoriesEndpoint.getById(id);
  }

  /**
   * Creates a new category.
   * @param category - The Category entity to create.
   * @returns An Observable emitting the created Category entity.
   */
  createCategory(category: Category): Observable<Category> {
    return this.categoriesEndpoint.create(category);
  }

  /**
   * Updates an existing category.
   * @param category - The Category entity to update.
   * @returns An Observable emitting the updated Category entity.
   */
  updateCategory(category: Category): Observable<Category> {
    return this.categoriesEndpoint.update(category, category.id);
  }

  /**
   * Deletes a category by ID.
   * @param id - The ID of the category to delete.
   * @returns An Observable emitting void upon successful deletion.
   */
  deleteCategory(id: number): Observable<void> {
    return this.categoriesEndpoint.delete(id);
  }
}
