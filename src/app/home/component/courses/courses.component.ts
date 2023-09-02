import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HomeservicesService } from '../../services/homeservices.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  id:string
  constructor(private location: Location,private service:HomeservicesService){}
  ngOnInit(): void {
    this.getAllcourses()
    this.getId()
  }
  oldexames:any[]= []
  getId(){
    this.service.setIdcourse(this.id)
  }
   
  getAllcourses(){
    this.service.getCoursesoneSubject().subscribe((res:any)=>{
      this.oldexames=res.data
      
      console.log(this.oldexames)
    })
  }
    goBack() {
      this.location.back();
    }
  }
