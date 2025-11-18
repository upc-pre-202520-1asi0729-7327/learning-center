import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

export abstract class ErrorHandlingEnabledBaseType {
  /**
   * Handles HTTP errors and returns an Observable that emits an error message.
   * @param operation - The name of the operation that failed.
   * @returns A function that takes an HttpErrorResponse and returns an Observable that emits an error message.
   * @protected
   */
  protected handleError(operation: string) {
    return (error: HttpErrorResponse): Observable<never> => {
      let errorMessage = operation;
      if (error.status === 404) {
        errorMessage = `${operation}: Resource not found`;
      } else if (error.error instanceof ErrorEvent) {
        errorMessage = `${operation}: ${error.error.message}`;
      } else {
        errorMessage = `${operation}: ${error.statusText || 'Unexpected error'}`;
      }
      return throwError(() => new Error(errorMessage));
    }
  }
}
