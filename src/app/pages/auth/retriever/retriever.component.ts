import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputGroupComponent } from '../../../shared/components/input-group/input-group.component';
import { LinksComponent } from '../../../shared/components/links/links.component';

import { createRetrieverForm } from './form/form-retriever.component';

@Component({
  selector: 'app-retriever',
  standalone: true,
  imports: [AuthCardComponent, InputGroupComponent, ReactiveFormsModule, ButtonComponent, LinksComponent],
  templateUrl: './retriever.component.html',
  styleUrl: './retriever.component.css',
})
export class RetrieverComponent implements OnInit, OnDestroy {
  retrieverForm!: FormGroup;

  ngOnInit(): void {
    this.retrieverForm = createRetrieverForm();
  }

  onRetriever(): void {
    console.log('Recuperado!');
  }

  ngOnDestroy(): void {
    console.log('RetrieverComponent ngOnDestroy');
  }
}
