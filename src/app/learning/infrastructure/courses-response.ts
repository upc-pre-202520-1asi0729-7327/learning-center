import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource interface for course data.
 * Represents a single course in API responses.
 */
export interface CourseResource extends BaseResource {
  id: number;
  title: string;
  description: string;
  categoryId: number;
}

/**
 * Response interface for courses API calls.
 * Contains an array of course resources.
 */
export interface CoursesResponse extends BaseResponse {
  courses: CourseResource[];
}
