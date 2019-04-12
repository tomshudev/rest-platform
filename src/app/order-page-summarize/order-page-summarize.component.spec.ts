import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageSummarizeComponent } from './order-page-summarize.component';

describe('OrderPageSummarizeComponent', () => {
  let component: OrderPageSummarizeComponent;
  let fixture: ComponentFixture<OrderPageSummarizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPageSummarizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageSummarizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
