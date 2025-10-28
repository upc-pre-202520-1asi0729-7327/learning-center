import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {CategoriesResponse, CategoryResource} from './categories-response';
import {Category} from '../domain/model/category.entity';

/**
 * Assembler for converting between Category entities and Category resources/responses.
 * Implements the BaseAssembler interface for Category domain objects.
 */
export class CategoryAssembler implements BaseAssembler<Category, CategoryResource, CategoriesResponse> {
  /**
   * Converts a CategoriesResponse to an array of Category entities.
   * @param response - The API response containing categories.
   * @returns An array of Category entities.
   */
  toEntitiesFromResponse(response: CategoriesResponse): Category[] {
    return response.categories.map(resource  => this.toEntityFromResource(resource as CategoryResource));
  }

  /**
   * Converts a CategoryResource to a Category entity.
   * @param resource - The resource object from the API.
   * @returns The corresponding Category entity.
   */
  toEntityFromResource(resource: CategoryResource): Category {
    return new Category({ id: resource.id, name: resource.name });
  }

  /**
   * Converts a Category entity to a CategoryResource.
   * @param entity - The Category entity to convert.
   * @returns The corresponding CategoryResource.
   */
  toResourceFromEntity(entity: Category): CategoryResource {
    return { id: entity.id, name: entity.name } as CategoryResource;
  }

}
