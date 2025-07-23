import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthCardComponent } from '../../../../shared/components/auth-card/auth-card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputCodeComponent } from '../../../../shared/components/input-code/input-code.component';
import { LinksComponent } from '../../../../shared/components/links/links.component';

import { createConfirmCodeForm } from './form/form-confirm-code.component';

@Component({
  selector: 'app-confirm-code',
  imports: [AuthCardComponent, ButtonComponent, LinksComponent, InputCodeComponent],
  templateUrl: './confirm-code.component.html',
  styleUrl: './confirm-code.component.css',
})
export class ConfirmCodeComponent implements OnInit, OnDestroy {
  confirmCodeForm!: FormGroup;

  private _route = inject(Router);

  ngOnInit() {
    this.confirmCodeForm = createConfirmCodeForm();
  }

  ngOnDestroy() {
    console.log('destroy send confirmCode');
  }
}
