import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciaCourseComponent } from './specia-course.component';

describe('SpeciaCourseComponent', () => {
  let component: SpeciaCourseComponent;
  let fixture: ComponentFixture<SpeciaCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciaCourseComponent]
    });
    fixture = TestBed.createComponent(SpeciaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
