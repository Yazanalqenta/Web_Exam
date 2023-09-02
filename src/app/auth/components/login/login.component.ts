import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthservicesService } from '../../services/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicelogin:AuthservicesService,private router: Router){}
  formUser!:FormGroup;
  islogin:boolean=false
  ngOnInit(): void {
    this.genarateform()

  }

  genarateform(){
    this.formUser=new FormGroup({
      name:new FormControl("",Validators.required),
      codenumber:new FormControl("",Validators.required)
    })
    
  }
   sendmodel(){
    console.log(this.formUser.value)
      const form = new FormData;
     form.append('user_name', this.formUser.value.name);
     form.append('passcode', this.formUser.value.codenumber);
    // let model={
    //   user_name: this.formUser.value.name,
    //   passcode:this.formUser.value.codenumber
    // }

    this.servicelogin.loginUser(form).subscribe((res:any)=>{
      //console.log(res)
      this.islogin=true;
      this.servicelogin.validatelogin(this.islogin);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem("id",res.data.collage.id)
      //console.log(res.data.id)
      this.router.navigate(["/categories"])


    },erorr=>{
      alert("unsuccess")
    }
    )
    

  }
 

}
