import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { ListResponseModel } from '../../models/ListResponseModel';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  
  brands: Brand[] = [];
  currentBrand :Brand;
  


  constructor (private brandService:BrandService) {} //injection yapmak için bu kod oluşturuldu.

ngOnInit ():void{
//console.log("Init Çalıştı");
this.getBrands();
}

getBrands(){
  this.brandService.getBrands().subscribe(Response=>{
    this.brands = Response.data
  })
}
setCurrentBrand(brand:Brand){
  //console.log(brand.brandName) // Bu fonksiyon ile hangi markaya tıklanırsa(html'de click ile consolede istek yollar ve sayı verir)
  this.currentBrand = brand;
}
getCurrentBrandClass(brand:Brand){
  if(brand == this.currentBrand){
  return "list-group-item active";}
else {
  return "list-group-item 1"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else {
      return "list-group-item 1"
    }
  }
}

