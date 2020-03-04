import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrdersAddComponent } from './bulk-orders-add.component';

describe('BulkOrdersAddComponent', () => {
  let component: BulkOrdersAddComponent;
  let fixture: ComponentFixture<BulkOrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
