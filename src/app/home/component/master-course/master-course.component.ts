import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HomeservicesService } from '../../services/homeservices.service';
@Component({
  selector: 'app-master-course',
  templateUrl: './master-course.component.html',
  styleUrls: ['./master-course.component.css']
})
export class MasterCourseComponent implements OnInit {
  constructor(private location: Location,private service:HomeservicesService){}
  ngOnInit(): void {
   this.GetMasterCourse() 
  }
  oldexames:any[]= []
    goBack() {
      this.location.back();
    }
    GetMasterCourse(){
      this.service.GetMasterCourse().subscribe((res:any)=>{
        this.oldexames=res.data
      })
    }
}
