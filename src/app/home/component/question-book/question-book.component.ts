import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../services/homeservices.service';

@Component({
  selector: 'app-question-book',
  templateUrl: './question-book.component.html',
  styleUrls: ['./question-book.component.css']
})
export class QuestionBookComponent implements OnInit{
  currentQuestion = 0;
  selectedAnswer: string;
  questions:any[]
  favoritequestions:any[]
  id:number=1

constructor(private service: HomeservicesService){}
ngOnInit():void{
 this.getQuestionBook()
}

getQuestionBook(){
this.service.getQuestionsBook().subscribe((res:any)=>{
this.questions=res.data
console.log(this.questions)
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

submitQuiz() {
  // تنفيذ الإجراءات المطلوبة عند النقر على زر "إرسال"
}
postQuestion(id:any,question:any){
  this.service.postFavoriteQuestion(id,question).subscribe((res:any)=>{
  
  })
  }
  viewFavoriteQuestions(){
   this.service.veiwFavoriteQuestions().subscribe((res:any)=>{
  this.favoritequestions=res.data
  console.log(this.favoritequestions)
   }) 
  }

}
