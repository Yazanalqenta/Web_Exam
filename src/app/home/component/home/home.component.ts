import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../services/homeservices.service';
import { RouterModule } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  iid:string
  constructor(private service: HomeservicesService,) { }
  ngOnInit(): void {
    this.GetSection()
  }
  section: any[] = [];
  selected:boolean=false;
  GetSection() {
    this.service.getType().subscribe((res: any) => {
      this.section = res.data
     // this.iid=res.data.id
      console.log(this.section)
    })
  }
 
}
