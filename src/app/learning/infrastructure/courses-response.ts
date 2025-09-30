import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface CourseResource extends BaseResource {
  id: number;
  title: string;
  description: string;
  categoryId: number;
}
export interface CoursesResponse extends BaseResponse {
  courses: CourseResource[];
}
