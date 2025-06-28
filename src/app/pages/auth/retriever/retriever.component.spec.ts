import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieverComponent } from './retriever.component';

describe('RetrieverComponent', () => {
  let component: RetrieverComponent;
  let fixture: ComponentFixture<RetrieverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetrieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
