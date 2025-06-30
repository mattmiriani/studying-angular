import { FormControl, FormGroup, Validators } from '@angular/forms';

import { passwordsMatchValidator } from '../../../../utils/password-utils.component';

export interface RegisterData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
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
