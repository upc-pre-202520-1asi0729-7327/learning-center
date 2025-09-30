import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Category} from '../domain/model/category.entity';
import {CategoriesResponse, CategoryResource} from './categories-response';
import {CategoryAssembler} from './category-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const categoriesEndpointUrl = `${environment.platformProviderApiBaseUrl}${environment.platformProviderCategoriesEndpointPath}`;
export class CategoriesApiEndpoint extends BaseApiEndpoint<Category, CategoryResource, CategoriesResponse, CategoryAssembler> {
  constructor(http: HttpClient) {
    super(http, categoriesEndpointUrl, new CategoryAssembler());
  }
}
