import {environment} from '../../../environments/environment';
import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Course} from '../domain/model/course.entity';
import {CourseResource, CoursesResponse} from './courses-response';
import {CourseAssembler} from './course-assembler';
import {HttpClient} from '@angular/common/http';

const coursesApiEndpointUrl = `${environment.platformProviderApiBaseUrl}${environment.platformProviderCoursesEndpointPath}`;

export class CoursesApiEndpoint extends BaseApiEndpoint<Course, CourseResource, CoursesResponse, CourseAssembler>{
  constructor(http: HttpClient) {
    super( http, coursesApiEndpointUrl, new CourseAssembler());
  };
}
