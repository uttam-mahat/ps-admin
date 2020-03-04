import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersEditComponent } from './bulk-orders-edit.component';

describe('BulkOrdersEditComponent', () => {
  let component: BulkOrdersEditComponent;
  let fixture: ComponentFixture<BulkOrdersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
