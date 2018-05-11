import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuDetailsComponent } from './order-menu-details.component';

describe('OrderMenuDetailsComponent', () => {
  let component: OrderMenuDetailsComponent;
  let fixture: ComponentFixture<OrderMenuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
