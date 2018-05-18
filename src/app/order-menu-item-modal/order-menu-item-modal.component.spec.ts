import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuItemModalComponent } from './order-menu-item-modal.component';

describe('OrderMenuItemModalComponent', () => {
  let component: OrderMenuItemModalComponent;
  let fixture: ComponentFixture<OrderMenuItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
