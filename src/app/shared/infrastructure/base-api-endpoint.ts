import {BaseEntity} from '../domain/model/base-entity';
import {BaseResource, BaseResponse} from './base-response';
import {BaseAssembler} from './base-assembler';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';
import {ErrorHandlingEnabledBaseType} from './error-handling-enabled-base-type';

/**
 * A generic base class for API endpoints providing standard CRUD operations.
 *
 * @template TEntity - The domain entity type.
 * @template TResource - The resource type used for API communication.
 * @template TResponse - The response type from the API.
 * @template TAssembler - The assembler type for converting between entities and resources.
 */
export abstract class BaseApiEndpoint<
  TEntity extends BaseEntity,
  TResource extends BaseResource,
  TResponse extends BaseResponse,
  TAssembler extends BaseAssembler<TEntity, TResource, TResponse>
> extends ErrorHandlingEnabledBaseType {
  /**
   * Creates an instance of BaseApiEndpoint.
   * @param http - The HttpClient for making HTTP requests.
   * @param endpointUrl - The base URL for the API endpoint.
   * @param assembler - The assembler for converting between entities and resources.
   */
  protected constructor(
    protected http: HttpClient,
    protected endpointUrl: string,
    protected assembler: TAssembler
  ) { super();}

  /**
   * Fetches all entities from the API.
   * @returns An Observable emitting an array of entities.
   */
  getAll(): Observable<TEntity[]> {
    return this.http.get<TResponse | TResource[]>(this.endpointUrl).pipe(
      map(response => {
        console.log(response);
        if (Array.isArray(response)) {
          return response.map(resource  => this.assembler.toEntityFromResource(resource));
        }
        return this.assembler.toEntitiesFromResponse(response as TResponse);
      }),
      catchError(this.handleError('Failed to fetch entities'))
    );
  }

  /**
   * Fetches a single entity by its ID from the API.
   * @returns An Observable emitting the entity.
   * @param id - The ID of the entity to fetch.
   */
  getById(id: number): Observable<TEntity> {
    return this.http.get<TResource>(`${this.endpointUrl}/${id}`).pipe(
      map(resource => this.assembler.toEntityFromResource(resource)),
      catchError(this.handleError(`Failed to fetch entity with id=${id}`))
    );
  }

  /**
   * Creates a new entity via the API.
   * @param entity - The entity to create.
   * @returns An Observable emitting the created entity.
   */
  create(entity: TEntity): Observable<TEntity> {
    const resource = this.assembler.toResourceFromEntity(entity);
    return this.http.post<TResource>(this.endpointUrl, resource).pipe(
      map(createdResource => this.assembler.toEntityFromResource(createdResource)),
      catchError(this.handleError('Failed to create entity'))
    );
  }

  /**
   * Updates an existing entity via the API.
   * @returns An Observable emitting the updated entity.
   * @param entity - The entity to update.
   * @param id - The ID of the entity to update.
   */
  update(entity: TEntity,  id: number): Observable<TEntity> {
    const resource = this.assembler.toResourceFromEntity(entity);
    return this.http.put<TResource>(`${this.endpointUrl}/${id}`, resource).pipe(
      map(updatedResource => this.assembler.toEntityFromResource(updatedResource)),
      catchError(this.handleError(`Failed to update entity with id=${id}`))
    );
  }

  /**
   * Deletes an entity by its ID via the API.
   * @returns An Observable emitting void upon successful deletion.
   * @param id - The ID of the entity to delete.
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`).pipe(
      catchError(this.handleError(`Failed to delete entity with id=${id}`))
    );
  }

}
