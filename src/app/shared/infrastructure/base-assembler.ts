import {BaseEntity} from '../domain/model/base-entity';
import {BaseResource, BaseResponse} from './base-response';

/**
 * BaseAssembler interface for converting between entities, resources, and responses.
 * @template TEntity - The type of the entity.
 * @template TResource - The type of the resource.
 * @template TResponse - The type of the response.
 */
export interface BaseAssembler<TEntity extends BaseEntity, TResource extends BaseResource, TResponse extends BaseResponse> {
  /**
   * Converts a resource to an entity.
   * @param resource - The resource to convert.
   * @returns The converted entity.
   */
  toEntityFromResource(resource: TResource): TEntity;

  /**
   * Converts an entity to a resource.
   * @returns The converted resource.
   * @param entity - The entity to convert.
   */
  toResourceFromEntity(entity: TEntity): TResource;

  /**
   * Converts a response to an array of entities.
   * @returns An array of converted entities.
   * @param response - The response to convert.
   */
  toEntitiesFromResponse(response: TResponse): TEntity[];
}
