import { Component, Input, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';

interface carouselimages{
  imageSrc:string,
  imageAlt:string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
 // @Input() images: carouselimages[]=[]
 images:any[]=[]
  indecorators=true
 // @Input() indecorators=true

 selectedindex=0;
 constructor(private servicehome:HomeservicesService){}
  ngOnInit(): void {
   this. getimage()
  }
  selectimage(index:number):void{
this.selectedindex=index;
  }
  getimage(){
    this.servicehome.getAdvertisements().subscribe((res:any)=>{
     // console.log(res.data)
     this.images=res.data;
     console.log(this.images)
    })
  }

}
