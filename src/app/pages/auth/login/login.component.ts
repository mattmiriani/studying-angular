import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputGroupComponent } from '../../../shared/components/input-group/input-group.component';
import { AuthCardComponent } from '../components/auth-card/auth-card.component';

import { createLoginForm } from './form/form-login.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, InputGroupComponent, AuthCardComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  router = inject(Router);

  ngOnInit(): void {
    this.loginForm = createLoginForm();
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      console.log('Botão Entrar clicado!');
      console.log('Usuário:', username);
      console.log('Senha:', password);

      if (username === 'teste' && password === '123456') {
        this.router.navigate(['/home']).then((r) => console.log(r));
      } else {
        this.loginForm.get('password')?.reset();
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    console.log('onDestroy login');
  }
}
