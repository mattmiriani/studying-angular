import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): Record<string, unknown> | null => {
    if (!(formGroup instanceof FormGroup)) {
      return null;
    }

    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (!passwordControl.value && !confirmPasswordControl.value) {
      return null;
    }

    if (confirmPasswordControl.value.length > 6 && passwordControl.value !== confirmPasswordControl.value) {
      passwordControl.setErrors({ ...passwordControl.errors, mismatch: true });
      confirmPasswordControl.setErrors({ ...confirmPasswordControl.errors, mismatch: true });
      return { mismatch: true };
    } else {
      removeMismatchError(passwordControl);
      removeMismatchError(confirmPasswordControl);
      return null;
    }
  };
}

function removeMismatchError(control: AbstractControl): void {
  const errors = control.errors;
  if (errors && errors['mismatch']) {
    delete errors['mismatch'];
    if (Object.keys(errors).length === 0) {
      control.setErrors(null);
    } else {
      control.setErrors(errors);
    }
  }
}
