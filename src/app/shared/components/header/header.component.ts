import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from 'src/app/auth/services/authservices.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private service:AuthservicesService){}
log:boolean=this.service.loggin
isMenuOpen= false ;
ngOnInit(): void {
 
  }
  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }
  
  login(){

  }
}


