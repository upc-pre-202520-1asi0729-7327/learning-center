import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface SignUpResource extends BaseResource {
  id: number;
  username: string;
}
export interface SignUpResponse extends BaseResponse, SignUpResource {}
