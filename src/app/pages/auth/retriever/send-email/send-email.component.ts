import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthCardComponent } from '../../../../shared/components/auth-card/auth-card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputGroupComponent } from '../../../../shared/components/input-group/input-group.component';
import { LinksComponent } from '../../../../shared/components/links/links.component';

import { createSendEmailForm } from './form/form-send-email.component';

@Component({
  selector: 'app-send-email',
  imports: [AuthCardComponent, InputGroupComponent, ReactiveFormsModule, ButtonComponent, LinksComponent],
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.css',
})
export class SendEmailComponent implements OnInit, OnDestroy {
  sendEmailForm!: FormGroup;

  private _route = inject(Router);

  ngOnInit() {
    this.sendEmailForm = createSendEmailForm();
  }

  onSendEmail(): void {
    this._route.navigate(['/retriever']);
  }

  ngOnDestroy() {
    console.log('destroy send email');
  }
}
