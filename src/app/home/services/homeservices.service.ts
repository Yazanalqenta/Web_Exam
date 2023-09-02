import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {
 

  constructor(private http:HttpClient) { }
  
  private myArray: any[];
  
  idforOneSpecializ:any
  IdCourse:any
  setIdcourse(data: any){
    this.IdCourse=data
  }
  setData(data: any) {
    this.idforOneSpecializ = data;
  }
  setArray(array: any[]) {
    this.myArray = array;
  }
  getArray() {
    return this.myArray;
  }
  getType(){
    return this.http.get("https://laravel-team6.000webhostapp.com/api/collages")
   }
   getAdvertisements(){
    return this.http.get("https://laravel-team6.000webhostapp.com/api/sliders")
   }
   getCategories(userToken:string){
   //const userToken=localStorage.getItem("token");
   //console.log(userToken)
  // const headers=new HttpHeaders().set('Authorization',"Bearer "+userToken)
   const iid=localStorage.getItem("id")
   //console.log(iid)
    return this.http.get
    (`https://laravel-team6.000webhostapp.com/api/collages/${iid}/specializations`
    )

  }
  getCoursesForSpecializ(){
    const id=this.idforOneSpecializ
    return this.http.get(`https://laravel-team6.000webhostapp.com/api/specializations/${id}/questions`)
  }
  getOnecourse(){
    return this.http.get("https://laravel-team6.000webhostapp.com/api/terms//questions")

  }
  getCoursesoneSubject(){
    const id=this.IdCourse
    return this.http.get(`https://laravel-team6.000webhostapp.com/api/specializations/${id}/questions`)

  }
  getQuestionsToOneSubject(){
    return this.http.get("https://laravel-team6.000webhostapp.com/api/specializations/b9e5bf86-036a-4086-94c2-c691c5ae5195/questions")

  }
  getQuestionsBook(){
    const id=this.idforOneSpecializ
    return this.http.get(`https://laravel-team6.000webhostapp.com/api/specializations/${id}/bookQuestions`)
  
  }
  Get50Question(){
    const iid=localStorage.getItem("id")
    return this.http.get("https://laravel-team6.000webhostapp.com/api/test/"+iid)
  }
   postFavoriteQuestion(id:any,question:any){
    return this.http.post("https://laravel-team6.000webhostapp.com/api/favorites/"+id,question)
   }
   veiwFavoriteQuestions(){
    //const userToken=localStorage.getItem("token")
   //const headers=new HttpHeaders().set('Authorization',"Bearer"+userToken)

    return this.http.get("https://laravel-team6.000webhostapp.com/api/favorites")
   }
   GetMasterCourse(){
    const iid=localStorage.getItem("id")
    return this.http.get
(`https://laravel-team6.000webhostapp.com/api/collages/${iid}/terms/1`)
   }
   GetGaduateCourse(){
    const iid=localStorage.getItem("id")
    return  this.http.get
    (`https://laravel-team6.000webhostapp.com/api/collages/${iid}/terms/0`)

   }
   postCorrect(model:any){
    return  this.http.post('https://laravel-team6.000webhostapp.com/api/test/correction',model)
   }



}
