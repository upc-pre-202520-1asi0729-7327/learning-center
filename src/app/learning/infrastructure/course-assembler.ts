import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {CourseResource, CoursesResponse} from './courses-response';
import {Course} from '../domain/model/course.entity';

/**
 * Assembler for converting between Course entities and Course resources/responses.
 * Implements the BaseAssembler interface for Course domain objects.
 */
export class CourseAssembler implements BaseAssembler<Course, CourseResource, CoursesResponse>{
  /**
   * Converts a CourseResource to a Course entity.
   * @param resource - The resource object from the API.
   * @returns The corresponding Course entity.
   */
  toEntityFromResource(resource: CourseResource): Course {
    return new Course({ id: resource.id, title: resource.title, description: resource.description,   categoryId: resource.categoryId });
  }

  /**
   * Converts a Course entity to a CourseResource.
   * @param entity - The Course entity to convert.
   * @returns The corresponding CourseResource.
   */
  toResourceFromEntity(entity: Course): CourseResource {
    return { id: entity.id, title: entity.title, description: entity.description, categoryId: entity.categoryId } as CourseResource;
  }

  /**
   * Converts a CoursesResponse to an array of Course entities.
   * @param response - The API response containing courses.
   * @returns An array of Course entities.
   */
  toEntitiesFromResponse(response: CoursesResponse): Course[] {
    return response.courses.map(resource => this.toEntityFromResource(resource as CourseResource));
  }
}
