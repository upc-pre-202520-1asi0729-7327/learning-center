import {SignUpRequest} from './sign-up.request';
import {SignUpCommand} from '../domain/model/sign-up.command';
import {SignUpResource, SignUpResponse} from './sign-up-response';

/**
 * Assembler for converting between sign-up commands, requests, and responses.
 */
export class SignUpAssembler {
  /**
   * Converts a sign-up response to a sign-up resource.
   * @param response The response from the API.
   * @returns The assembled sign-up resource.
   */
  toResourceFromResponse(response: SignUpResponse): SignUpResource {
    return {
      id: response.id,
      username: response.username,
    } as SignUpResource;
  }

  /**
   * Converts a sign-up command to a sign-up request.
   * @param command The sign-up command.
   * @returns The assembled sign-up request.
   */
  toRequestFromCommand(command: SignUpCommand): SignUpRequest {
    return {
      username: command.username,
      password: command.password,
    } as SignUpRequest;
  }
}
