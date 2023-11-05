import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAndMultipleStyleBindingComponent } from './single-and-multiple-style-binding.component';

describe('SingleAndMultipleStyleBindingComponent', () => {
  let component: SingleAndMultipleStyleBindingComponent;
  let fixture: ComponentFixture<SingleAndMultipleStyleBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAndMultipleStyleBindingComponent]
    });
    fixture = TestBed.createComponent(SingleAndMultipleStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
