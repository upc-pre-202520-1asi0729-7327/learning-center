import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource interface for sign-up operations.
 * Represents the data returned after a successful sign-up.
 */
export interface SignUpResource extends BaseResource {
  id: number;
  username: string;
}

/**
 * Response interface for sign-up API calls.
 * Extends BaseResponse and SignUpResource.
 */
export interface SignUpResponse extends BaseResponse, SignUpResource {}
