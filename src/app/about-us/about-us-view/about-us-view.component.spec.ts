import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsViewComponent } from './about-us-view.component';

describe('AboutUsViewComponent', () => {
  let component: AboutUsViewComponent;
  let fixture: ComponentFixture<AboutUsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
