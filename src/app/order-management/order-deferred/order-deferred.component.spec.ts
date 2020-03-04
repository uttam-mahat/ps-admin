import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeferredComponent } from './order-deferred.component';

describe('OrderDeferredComponent', () => {
  let component: OrderDeferredComponent;
  let fixture: ComponentFixture<OrderDeferredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDeferredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
