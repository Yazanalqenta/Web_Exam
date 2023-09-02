import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthservicesService } from '../../services/authservices.service';
import { Router } from '@angular/router';
import { HomeservicesService } from 'src/app/home/services/homeservices.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css'],

})
export class RegesterComponent implements OnInit {

  specializations: any[] = [];
  constructor( private service: AuthservicesService, private router: Router, private homeService: HomeservicesService) { }
  ngOnInit(): void {
    this.getSpecializations();
    this.genarateform()
  }

  getSpecializations() {
    this.homeService.getType().subscribe((res: any) => {
      console.log(res)
      this.specializations = res.data
    })
  }
  formUser!: FormGroup;

  genarateform() {
    this.formUser = new FormGroup({
      name: new FormControl(''),
      number: new FormControl(''),
      spec: new FormControl(null),
    })

  }
  onsubmit() {
    console.log(this.formUser.value)
   
    const form = new FormData;
    

    form.append('user_name', this.formUser.value.name);
    form.append('phone', this.formUser.value.number);
    form.append('collage_uuid', this.formUser.value.spec);
    this.service.greateuser(form).subscribe(res => {
      console.log(res)
      alert("success")
      //this.router.navigate(["/home"])

    }, erorr => {
      alert("unsuccess");
    })
  }

}
