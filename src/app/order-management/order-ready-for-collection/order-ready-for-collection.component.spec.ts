import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReadyForCollectionComponent } from './order-ready-for-collection.component';

describe('OrderReadyForCollectionComponent', () => {
  let component: OrderReadyForCollectionComponent;
  let fixture: ComponentFixture<OrderReadyForCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderReadyForCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReadyForCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
