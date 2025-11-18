import {environment} from '../../../environments/environment';
import {ErrorHandlingEnabledBaseType} from '../../shared/infrastructure/error-handling-enabled-base-type';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';
import {SignUpAssembler} from './sign-up-assembler';
import {SignUpResource, SignUpResponse} from './sign-up-response';
import {SignUpCommand} from '../domain/model/sign-up.command';

const signUpApiEndpointUrl = `${environment.platformProviderApiBaseUrl}/${environment.platformProviderSignUpEndpointPath}`;

export class SignUpApiEndpoint extends ErrorHandlingEnabledBaseType {
  constructor(private http: HttpClient, private assembler: SignUpAssembler) {
    super();
  }

  signUp(signUpCommand: SignUpCommand): Observable<SignUpResource> {
    const signUpRequest = this.assembler.toRequestFromCommand(signUpCommand);
    return this.http.post<SignUpResponse>(signUpApiEndpointUrl, signUpRequest).pipe(
      map(response => this.assembler.toResourceFromResponse(response)),
      catchError(this.handleError('Failed to sign-in'))
    );
  }


}
