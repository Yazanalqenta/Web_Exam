import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../services/homeservices.service';
//import { map } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
 
  nameCategory:any[]=[]
  
  userToken:string
  constructor(private categoryservice:HomeservicesService){}
  ngOnInit(): void {
    this.userToken=localStorage.getItem("token");
   this.getcategories() 
  }
getcategories(){
  this.categoryservice.getCategories(this.userToken).subscribe((res:any)=>{
    //console.log(res)
    
    this.nameCategory=res.data
    console.log(this.nameCategory)
  //} ,erorr=>{
  //   alert("unsuccess")
  }
  )
}
sendData(id:any){
  this.categoryservice.setData(id)
}


 
}

