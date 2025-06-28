import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export interface RegisterData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

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

export function createRegisterForm(): FormGroup {
  return new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    { validators: passwordsMatchValidator() },
  );
}
