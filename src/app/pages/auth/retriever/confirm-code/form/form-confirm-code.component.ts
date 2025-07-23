import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ConfirmCodeData {
  code: string;
}

export function createConfirmCodeForm(): FormGroup {
  return new FormGroup({
    code: new FormControl('', [Validators.required]),
  });
}
