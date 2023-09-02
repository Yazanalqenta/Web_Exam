import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateCourseComponent } from './graduate-course.component';

describe('GraduateCourseComponent', () => {
  let component: GraduateCourseComponent;
  let fixture: ComponentFixture<GraduateCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateCourseComponent]
    });
    fixture = TestBed.createComponent(GraduateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
