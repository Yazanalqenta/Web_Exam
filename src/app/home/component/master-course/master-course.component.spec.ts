import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCourseComponent } from './master-course.component';

describe('MasterCourseComponent', () => {
  let component: MasterCourseComponent;
  let fixture: ComponentFixture<MasterCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterCourseComponent]
    });
    fixture = TestBed.createComponent(MasterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
