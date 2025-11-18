import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource interface for category data.
 * Represents a single category in API responses.
 */
export interface CategoryResource extends BaseResource {
  id: number;
  name: string;
}

/**
 * Response interface for categories API calls.
 * Contains an array of category resources.
 */
export interface CategoriesResponse extends BaseResponse {
  categories: CategoryResource[];
}
