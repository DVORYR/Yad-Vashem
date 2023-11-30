import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHoursComponent } from './show-hours.component';

describe('ShowHoursComponent', () => {
  let component: ShowHoursComponent;
  let fixture: ComponentFixture<ShowHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowHoursComponent]
    });
    fixture = TestBed.createComponent(ShowHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
