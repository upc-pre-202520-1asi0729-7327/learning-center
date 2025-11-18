/**
 * Command object for user sign-up operations.
 * Contains the username and password for registration.
 */
export class SignUpCommand {
  /**
   * Gets the username for sign-up.
   * @returns The username.
   */
  get username(): string {
    return this._username;
  }

  /**
   * Sets the username for sign-up.
   * @param value The username.
   */
  set username(value: string) {
    this._username = value;
  }

  /**
   * Gets the password for sign-up.
   * @returns The password.
   */
  get password(): string {
    return this._password;
  }

  /**
   * Sets the password for sign-up.
   * @param value The password.
   */
  set password(value: string) {
    this._password = value;
  }
  private _username: string;
  private _password: string;

  /**
   * Creates a new SignUpCommand instance.
   * @param resource An object containing username and password.
   */
  constructor(resource: {username: string, password: string}) {
    this._username = resource.username;
    this._password = resource.password;
  }
}
