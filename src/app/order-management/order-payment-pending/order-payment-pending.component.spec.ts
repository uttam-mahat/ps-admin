import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaymentPendingComponent } from './order-payment-pending.component';

describe('OrderPaymentPendingComponent', () => {
  let component: OrderPaymentPendingComponent;
  let fixture: ComponentFixture<OrderPaymentPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPaymentPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPaymentPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
