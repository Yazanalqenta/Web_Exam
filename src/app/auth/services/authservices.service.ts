import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
loggin:boolean=false
  constructor(private http:HttpClient) { }

   greateuser(model:any){
    return this.http.post("https://laravel-team6.000webhostapp.com/api/auth/register",model)
   }
   loginUser(model:any){
    return this.http.post("https://laravel-team6.000webhostapp.com/api/auth/login",model)
   }
   validatelogin(log:boolean){
this.loggin=log;
   }
   
  
   
}
