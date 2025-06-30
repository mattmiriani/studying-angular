import { FormControl, FormGroup, Validators } from '@angular/forms';

import { passwordsMatchValidator } from '../../../../utils/password-utils.component';

export interface RetrieverData {
  token: string;
  password: string;
  confirmPassword: string;
}

export function createRetrieverForm(): FormGroup {
  return new FormGroup(
    {
      token: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.minLength(6)]),
    },
    {
      validators: passwordsMatchValidator(),
    },
  );
}
