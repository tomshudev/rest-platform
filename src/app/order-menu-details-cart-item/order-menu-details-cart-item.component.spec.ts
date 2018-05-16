import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuDetailsCartItemComponent } from './order-menu-details-cart-item.component';

describe('OrderMenuDetailsCartItemComponent', () => {
  let component: OrderMenuDetailsCartItemComponent;
  let fixture: ComponentFixture<OrderMenuDetailsCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuDetailsCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuDetailsCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
