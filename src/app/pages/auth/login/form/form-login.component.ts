import { FormGroup, FormControl, Validators } from '@angular/forms';

export function createLoginForm(initialUsername = '', initialPassword = ''): FormGroup {
  return new FormGroup({
    username: new FormControl(initialUsername, Validators.required),
    password: new FormControl(initialPassword, [Validators.required, Validators.minLength(6)]),
  });
}
