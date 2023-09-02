
  import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeservicesService } from '../../services/homeservices.service';
import { Router } from '@angular/router';

  
  
  
  @Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css'],
  })
  export class QuestionComponent implements OnInit {
   
    questionForm!: FormGroup;
    currentQuestion = 0;
    selectedAnswer: string;
    questions:any[]
    favoritequestions:any[]
    sendmodel:any[]=[]
    id:number=1
    idQuestion:string
    idAnswer:string
    corectAnswer1:any[]
    
    previousAnswer:string
    
    

    constructor(private formBuilder: FormBuilder,private service:HomeservicesService,private router: Router){}
    
    ngOnInit() {
      this.questionForm = this.formBuilder.group({
        answer: ['', Validators.required]
      });
      this.getQuestions()
       this.sendData()
  
  
  
}
   getQuestions(){
            this.service.Get50Question().subscribe((res:any)=>{
               
               this.questions=res.data
               console.log(this.questions)
             })
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
  
 CorrectAnswer(){
  let model={
  "id":`${this.questions[this.currentQuestion].id}`,
"answer":`${this.questions[this.currentQuestion].options[this.selectedAnswer]}`
    }
this.sendmodel.push(model)

if(this.id===4){
  this.service.postCorrect(this.sendmodel).subscribe((res:any)=>{
    console.log(res)
    this.corectAnswer1=res.data

    
//this.idQuestion=res.questions.id
//this.idAnswer=res.questions.answer
  })
}
 

 }
  nextQuestion(){
    if (this.currentQuestion < this.questions.length ) {
      this.previousAnswer=this.selectedAnswer
      this.currentQuestion++;
      this.selectedAnswer=""
      this.id++
     
      if(this.id=== 4)
      {this.router.navigate(['/result'])}
    }
  }
  beforeQuestion(){
    if (this.currentQuestion < this.questions.length && this.id!=1) {
      
      this.selectedAnswer=this.previousAnswer
      this.currentQuestion--;
      this.id--
    }
  }
  sendData() {
    this.service.setArray(this.corectAnswer1);
  }

  submitQuiz(){
    // تنفيذ الإجراءات المطلوبة عند النقر على زر "إرسال"
  }

  }
