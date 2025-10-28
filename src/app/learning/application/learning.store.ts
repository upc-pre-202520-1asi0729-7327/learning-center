import {computed, Injectable, Signal, signal} from '@angular/core';
import {Category} from '../domain/model/category.entity';
import {Course} from '../domain/model/course.entity';
import {LearningApi} from '../infrastructure/learning-api';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {retry} from 'rxjs';

/**
 * Store for managing the state of learning resources (categories and courses).
 * Uses Angular signals for reactive state management and provides methods for CRUD operations.
 */
@Injectable({providedIn: 'root'})
export class LearningStore {
  // State signals
  private readonly categoriesSignal = signal<Category[]>([]);
  private readonly coursesSignal = signal<Course[]>([]);
  private readonly errorSignal = signal<string | null>(null);
  private readonly loadingSignal = signal<boolean>(false);
  // Readonly signals
  readonly categories = this.categoriesSignal.asReadonly();
  readonly courses = this.coursesSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  // Computed signals
  readonly categoriesCount = computed(() => this.categories.length);
  readonly coursesCount = computed(() => this.courses.length);
  readonly loading = this.loadingSignal.asReadonly();

  /**
   * Creates an instance of LearningStore and loads initial data.
   * @param learningApi - The API service for learning resources.
   */
  constructor(private learningApi: LearningApi) {
    this.loadCategories();
    this.loadCourses();
  }

  /**
   * Retrieves a category by ID as a computed signal.
   * @param id - The ID of the category, or null/undefined.
   * @returns A Signal emitting the Category or undefined.
   */
  getCategoryById(id: number | null | undefined): Signal<Category | undefined> {
    return computed(() => id ? this.categories().find(c => c.id === id) : undefined);
  }

  /**
   * Adds a new category.
   * @param category - The Category entity to add.
   */
  addCategory(category: Category): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.createCategory(category).pipe(retry(2)).subscribe({
      next: createdCategory => {
        this.categoriesSignal.update(categories => [...categories, createdCategory]);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to create category'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Updates an existing category.
   * @param updatedCategory - The Category entity to update.
   */
  updateCategory(updatedCategory: Category): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.updateCategory(updatedCategory).pipe(retry(2)).subscribe({
      next: category => {
        this.categoriesSignal.update(categories => categories.map(c => c.id === category.id ? category : c));
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to update category'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Deletes a category by ID.
   * @param id - The ID of the category to delete.
   */
  deleteCategory(id: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.deleteCategory(id).pipe(retry(2)).subscribe({
      next: () => {
        this.categoriesSignal.update(categories => categories.filter(c => c.id !== id));
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to delete category'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Retrieves a course by ID as a computed signal.
   * @param id - The ID of the course, or null/undefined.
   * @returns A Signal emitting the Course or undefined.
   */
  getCourseById(id: number | null | undefined): Signal<Course | undefined> {
    return computed(() => id ? this.courses().find(c => c.id === id) : undefined);
  }

  /**
   * Adds a new course.
   * @param course - The Course entity to add.
   */
  addCourse(course: Course): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.createCourse(course).pipe(retry(2)).subscribe({
      next: createdCourse => {
        createdCourse = this.assignCategoryToCourse(createdCourse);
        this.coursesSignal.update(courses => [...courses, createdCourse]);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to create course'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Updates an existing course.
   * @param updatedCourse - The Course entity to update.
   */
  updateCourse(updatedCourse: Course): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.updateCourse(updatedCourse).pipe(retry(2)).subscribe({
      next: course => {
        course = this.assignCategoryToCourse(course);
        this.coursesSignal.update(courses => courses.map(c => c.id === course.id ? course : c));
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to update course'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Deletes a course by ID.
   * @param id - The ID of the course to delete.
   */
  deleteCourse(id: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.deleteCourse(id).pipe(retry(2)).subscribe({
      next: () => {
        this.coursesSignal.update(courses => courses.filter(c => c.id !== id));
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to delete course'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Loads categories from the API.
   * @private
   */
  private loadCategories(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.getCategories().pipe(takeUntilDestroyed()).subscribe({
      next: categories => {
        this.categoriesSignal.set(categories);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load categories'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Loads courses from the API.
   * @private
   */
  private loadCourses(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.learningApi.getCourses().pipe(takeUntilDestroyed()).subscribe({
      next: courses => {
        this.coursesSignal.set(courses);
        this.loadingSignal.set(false);
        this.assignCategoriesToCourses();
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load courses'));
        this.loadingSignal.set(false);
      }
    });
  }

  /**
   * Assigns categories to all courses.
   * @private
   */
  private assignCategoriesToCourses(): void {
    this.coursesSignal.update(courses => courses.map(course => this.assignCategoryToCourse(course)));
  }

  /**
   * Assigns the corresponding category to a course.
   * @private
   * @param course - The Course entity to assign a category to.
   * @returns The Course with the assigned category.
   */
  private assignCategoryToCourse(course: Course): Course {
    const categoryId = course.categoryId ?? 0;
    course.category = categoryId ? this.getCategoryById(categoryId)() ?? null : null;
    return course;
  }

  /**
   * Formats error messages.
   * @private
   * @param error - The error object.
   * @param fallback - The fallback error message.
   * @returns The formatted error message.
   */
  private formatError(error: any,  fallback: string): string {
    if (error instanceof Error)
      return error.message.includes('Resource not found') ? `${fallback}: Not found` : error.message;
    return fallback;
  }

}
