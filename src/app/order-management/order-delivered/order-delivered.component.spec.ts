import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveredComponent } from './order-delivered.component';

describe('OrderDeliveredComponent', () => {
  let component: OrderDeliveredComponent;
  let fixture: ComponentFixture<OrderDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
