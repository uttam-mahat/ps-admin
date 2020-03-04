import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAddEditComponent } from './about-us-add-edit.component';

describe('AboutUsAddEditComponent', () => {
  let component: AboutUsAddEditComponent;
  let fixture: ComponentFixture<AboutUsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
