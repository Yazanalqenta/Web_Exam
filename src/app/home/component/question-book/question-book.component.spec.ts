import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBookComponent } from './question-book.component';

describe('QuestionBookComponent', () => {
  let component: QuestionBookComponent;
  let fixture: ComponentFixture<QuestionBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionBookComponent]
    });
    fixture = TestBed.createComponent(QuestionBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
