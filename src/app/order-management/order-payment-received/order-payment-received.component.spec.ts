import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPaymentReceivedComponent } from './order-payment-received.component';

describe('OrderPaymentReceivedComponent', () => {
  let component: OrderPaymentReceivedComponent;
  let fixture: ComponentFixture<OrderPaymentReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPaymentReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPaymentReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
