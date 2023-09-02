import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../services/homeservices.service';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})
export class OneCourseComponent implements OnInit {
  constructor(private service:HomeservicesService){}
  ngOnInit(): void {
    this.getOneCourseById()
  }
  currentQuestion = 0;
  selectedAnswer: any;
  questions:any[]
  id:number=1
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1 ) {
      this.currentQuestion++;
      this.selectedAnswer=""
      this.id++
    }
  }
  beforeQuestion(){
    if (this.currentQuestion < this.questions.length - 1&& this.id!=1) {
      this.currentQuestion--;
      this.selectedAnswer=""
      this.id--
    }
  }
  getOneCourseById()
{
  this.service.getCoursesoneSubject().subscribe((res:any)=>{
    this.questions=res.data
  })
}
  submitQuiz() {
    // تنفيذ الإجراءات المطلوبة عند النقر على زر "إرسال"
  }
}
