import {FormGroup} from '@angular/forms';

export class BaseForm {
  protected isInvalidControl(form: FormGroup, controlName: string): boolean {
    return form.controls[controlName].invalid && form.controls[controlName].touched;
  }

  private errorMessageForControl(controlName: string, errorKey: string): string {
    switch (errorKey) {
      case 'required': return `The field ${controlName} is required.`;
      default: return `The field ${controlName} is invalid.`;
    }
  }

  protected errorMessagesForControl(form: FormGroup, controlName: string): string {
    const control = form.controls[controlName];
    let errorMessages = "";
    let errors = control.errors;
    if (!errors) return errorMessages;
    Object.keys(errors).forEach((errorKey) =>
      errorMessages += this.errorMessageForControl(controlName, errorKey));
    return errorMessages;
  }
}
