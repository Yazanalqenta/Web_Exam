import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HomeservicesService } from '../../services/homeservices.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 
  
  mark:any[]
constructor(private location: Location, private service:HomeservicesService){}
ngOnInit(): void {
  this.viewResult()
}
goBack() {
  this.location.back();
}
viewResult(){
  this.mark=this.service.getArray()
}
}
