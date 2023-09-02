import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarExamComponent } from './star-exam.component';

describe('StarExamComponent', () => {
  let component: StarExamComponent;
  let fixture: ComponentFixture<StarExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarExamComponent]
    });
    fixture = TestBed.createComponent(StarExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
