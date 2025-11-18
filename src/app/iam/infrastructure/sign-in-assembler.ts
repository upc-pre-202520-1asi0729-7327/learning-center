import {SignInResource, SignInResponse} from './sign-in-response';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignInRequest} from './sign-in.request';

/**
 * Assembler for converting between sign-in commands, requests, and responses.
 */
export class SignInAssembler {
  /**
   * Converts a sign-in response to a sign-in resource.
   * @param response The response from the API.
   * @returns The assembled sign-in resource.
   */
  toResourceFromResponse(response: SignInResponse): SignInResource {
    return {
      id: response.id,
      username: response.username,
      token: response.token,
    } as SignInResource;
  }

  /**
   * Converts a sign-in command to a sign-in request.
   * @param command The sign-in command.
   * @returns The assembled sign-in request.
   */
  toRequestFromCommand(command: SignInCommand): SignInRequest {
    return {
      username: command.username,
      password: command.password,
    } as SignInRequest;
  }
}
