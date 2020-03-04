import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsEditComponent } from './faqs-edit.component';

describe('FaqsEditComponent', () => {
  let component: FaqsEditComponent;
  let fixture: ComponentFixture<FaqsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
