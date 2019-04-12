import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageNBComponent } from './home-page-nb.component';

describe('HomePageComponent', () => {
  let component: HomePageNBComponent;
  let fixture: ComponentFixture<HomePageNBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageNBComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageNBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
