import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuDetailsCartComponent } from './order-menu-details-cart.component';

describe('OrderMenuDetailsCartComponent', () => {
  let component: OrderMenuDetailsCartComponent;
  let fixture: ComponentFixture<OrderMenuDetailsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuDetailsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuDetailsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
