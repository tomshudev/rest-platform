import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuItemModalOptionPossibilityComponent } from './order-menu-item-modal-option-possibility.component';

describe('OrderMenuItemModalOptionPossibilityComponent', () => {
  let component: OrderMenuItemModalOptionPossibilityComponent;
  let fixture: ComponentFixture<OrderMenuItemModalOptionPossibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuItemModalOptionPossibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuItemModalOptionPossibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
