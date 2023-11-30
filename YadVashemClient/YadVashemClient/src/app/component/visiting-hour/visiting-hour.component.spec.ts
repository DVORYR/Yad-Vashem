import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingHourComponent } from './visiting-hour.component';

describe('VisitingHourComponent', () => {
  let component: VisitingHourComponent;
  let fixture: ComponentFixture<VisitingHourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitingHourComponent]
    });
    fixture = TestBed.createComponent(VisitingHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
