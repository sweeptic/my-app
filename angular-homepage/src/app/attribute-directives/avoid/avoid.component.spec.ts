import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidComponent } from './avoid.component';

describe('AvoidComponent', () => {
  let component: AvoidComponent;
  let fixture: ComponentFixture<AvoidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvoidComponent]
    });
    fixture = TestBed.createComponent(AvoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
