import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputGroupComponent } from '../../../shared/components/input-group/input-group.component';
import { AuthCardComponent } from '../components/auth-card/auth-card.component';

import { createRegisterForm } from './form/form-register.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, AuthCardComponent, InputGroupComponent, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = createRegisterForm();
  }

  onRegister(): void {
    console.log('Valores reais: ', this.registerForm);
  }

  ngOnDestroy(): void {
    console.log('onDestroy register');
  }
}
