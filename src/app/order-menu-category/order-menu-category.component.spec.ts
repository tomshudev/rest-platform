import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuCategoryComponent } from './order-menu-category.component';

describe('OrderMenuCategoryComponent', () => {
  let component: OrderMenuCategoryComponent;
  let fixture: ComponentFixture<OrderMenuCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
