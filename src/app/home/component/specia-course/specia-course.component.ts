import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../services/homeservices.service';

@Component({
  selector: 'app-specia-course',
  templateUrl: './specia-course.component.html',
  styleUrls: ['./specia-course.component.css']
})
export class SpeciaCourseComponent implements OnInit {
  currentQuestion = 0;
  selectedAnswer: string;
  questions:any[]
  favoritequestions:any[]
  id:number=1
constructor(private service:HomeservicesService){}

ngOnInit(): void {
this.GETCoursesforspecializ()  
}
GETCoursesforspecializ(){
  
  this.service.getCoursesForSpecializ().subscribe((res:any)=>{
    this.questions=res.data
console.log(res.data)
  })
}
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
postQuestion(id:any,question:any){
  this.service.postFavoriteQuestion(id,question).subscribe((res:any)=>{
  
  })
  }
  
  submitQuiz() {
    // تنفيذ الإجراءات المطلوبة عند النقر على زر "إرسال"
  }
}

