import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css'],
  imports: [ReactiveFormsModule],
})
export class InputGroupComponent {
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() control!: AbstractControl;

  @Input() errorMessageMismatch = '';
  @Input() errorMessageRequired = 'Campo obrigatório.';
  @Input() errorMessageMinLength = 'Mínimo de caracteres não atingido.';
  @Input() errorMessageEmail = 'E-mail inválido.';

  formControl(): FormControl {
    return this.control as FormControl;
  }
}
