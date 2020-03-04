import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDispatchedComponent } from './order-dispatched.component';

describe('OrderDispatchedComponent', () => {
  let component: OrderDispatchedComponent;
  let fixture: ComponentFixture<OrderDispatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDispatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDispatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
