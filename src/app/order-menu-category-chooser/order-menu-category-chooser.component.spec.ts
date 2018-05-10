import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuCategoryChooserComponent } from './order-menu-category-chooser.component';

describe('OrderMenuCategoryChooserComponent', () => {
  let component: OrderMenuCategoryChooserComponent;
  let fixture: ComponentFixture<OrderMenuCategoryChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuCategoryChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuCategoryChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
