import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersViewComponent } from './bulk-orders-view.component';

describe('BulkOrdersViewComponent', () => {
  let component: BulkOrdersViewComponent;
  let fixture: ComponentFixture<BulkOrdersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
