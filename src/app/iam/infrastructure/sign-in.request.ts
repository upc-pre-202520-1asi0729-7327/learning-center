/**
 * Request interface for sign-in API calls.
 * Contains the credentials needed to authenticate a user.
 */
export interface SignInRequest {
  username: string;
  password: string;
}
