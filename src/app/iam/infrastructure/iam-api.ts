import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {SignUpApiEndpoint} from './sign-up-api-endpoint';
import {SignInApiEndpoint} from './sign-in-api-endpoint';
import {HttpClient} from '@angular/common/http';
import {SignUpAssembler} from './sign-up-assembler';
import {SignInAssembler} from './sign-in-assembler';
import {SignUpCommand} from '../domain/model/sign-up.command';
import {Observable} from 'rxjs';
import {SignUpResource} from './sign-up-response';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignInResource} from './sign-in-response';

@Injectable({providedIn: 'root'})
export class IamApi extends BaseApi {
  private readonly signUpEndpoint: SignUpApiEndpoint;
  private readonly signInEndpoint: SignInApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.signUpEndpoint = new SignUpApiEndpoint(http, new SignUpAssembler());
    this.signInEndpoint = new SignInApiEndpoint(http, new SignInAssembler());
  }

  signUp(signUpCommand: SignUpCommand): Observable<SignUpResource>  {
    return this.signUpEndpoint.signUp(signUpCommand);
  }

  signIn(signInCommand: SignInCommand): Observable<SignInResource> {
    return this.signInEndpoint.signIn(signInCommand);
  }
}
