import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipulOrderComponent } from './multipul-order.component';

describe('MultipulOrderComponent', () => {
  let component: MultipulOrderComponent;
  let fixture: ComponentFixture<MultipulOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipulOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipulOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
