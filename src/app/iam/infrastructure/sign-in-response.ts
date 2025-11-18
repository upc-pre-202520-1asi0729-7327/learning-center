import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource interface for sign-in operations.
 * Represents the data returned after a successful sign-in, including authentication token.
 */
export interface SignInResource extends BaseResource {
  id: number;
  username: string;
  token: string;
}

/**
 * Response interface for sign-in API calls.
 * Extends BaseResponse and SignInResource.
 */
export interface SignInResponse extends BaseResponse, SignInResource {}
