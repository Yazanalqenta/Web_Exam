import { Component  } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-star-exam',
  templateUrl: './star-exam.component.html',
  styleUrls: ['./star-exam.component.css']
})
export class StarExamComponent {
  start:boolean=false
  constructor(private location: Location){}
  titleName : string ="اختبار الشبكات"
  mark : number  ;
  goBack() {
    this.location.back();
  }
}
