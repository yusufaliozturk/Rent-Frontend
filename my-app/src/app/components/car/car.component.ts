import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  

  cars: Car[] = [];
  dataLoaded = false;
  filterText="";
 
  constructor (private carService:CarService, 
    private activatedRoute:ActivatedRoute ) {} //injection yapmak için bu kod oluşturuldu.

ngOnInit ():void{
//console.log("Init Çalıştı");
this.getCars();
this.activatedRoute.params.subscribe(params=>{
  if(params["brandId"]){
    this.Getbybrand(params["brandId"])
  }
  else{
    this.getCars()
    }
} )
}

getCars() {
  this.carService.getCars().subscribe(Response=>{
    this.cars = Response.data
    this.dataLoaded = true;
  })
}
Getbybrand(brandId:number) {
  this.carService.Getbybrand(brandId).subscribe(Response=>{
    this.cars = Response.data
    this.dataLoaded = true;
  })
}
}
