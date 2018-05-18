import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuHeaderComponent } from './order-menu-header.component';

describe('OrderMenuHeaderComponent', () => {
  let component: OrderMenuHeaderComponent;
  let fixture: ComponentFixture<OrderMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
