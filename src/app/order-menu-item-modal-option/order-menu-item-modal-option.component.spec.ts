import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuItemModalOptionComponent } from './order-menu-item-modal-option.component';

describe('OrderMenuItemModalOptionComponent', () => {
  let component: OrderMenuItemModalOptionComponent;
  let fixture: ComponentFixture<OrderMenuItemModalOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuItemModalOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuItemModalOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
