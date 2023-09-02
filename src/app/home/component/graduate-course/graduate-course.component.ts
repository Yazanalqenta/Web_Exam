import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HomeservicesService } from '../../services/homeservices.service';
@Component({
  selector: 'app-graduate-course',
  templateUrl: './graduate-course.component.html',
  styleUrls: ['./graduate-course.component.css']
})
export class GraduateCourseComponent implements OnInit {
  constructor(private location: Location,private service:HomeservicesService){}
  ngOnInit(): void {
   this.getGraduateCourse() 
  }
  oldexames:any[]= [
  
    ]
    goBack() {
      this.location.back();
    }
    getGraduateCourse(){
      this.service.GetGaduateCourse().subscribe((res:any)=>{
this.oldexames=res.data
console.log(this.oldexames)
})
    }
}
