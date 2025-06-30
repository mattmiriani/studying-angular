import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputGroupComponent } from '../../../shared/components/input-group/input-group.component';
import { LinksComponent } from '../../../shared/components/links/links.component';

import { createRegisterForm } from './form/form-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, AuthCardComponent, InputGroupComponent, ButtonComponent, LinksComponent],
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
