import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface SendEmailData {
  email: string;
}

export function createSendEmailForm(): FormGroup {
  return new FormGroup({
    email: new FormControl('', [Validators.required]),
  });
}
