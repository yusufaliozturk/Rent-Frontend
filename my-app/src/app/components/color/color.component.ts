import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
  

  colors: Color[] = [];
  dataLoaded = false;
 

  constructor (private colorService:ColorService) {} //injection yapmak için bu kod oluşturuldu.

ngOnInit ():void{
//console.log("Init Çalıştı");
this.getColors();
}

getColors() {
  this.colorService.getColors().subscribe(Response=>{
    this.colors = Response.data
    this.dataLoaded = true;
  })
}
}
