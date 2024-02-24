import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  
  customers: Customer[] = [];

  constructor (private customerService:CustomerService) {} //injection yapmak için bu kod oluşturuldu.

ngOnInit ():void{
//console.log("Init Çalıştı");
this.getCustomers();
}

getCustomers(){
  this.customerService.getCustomers().subscribe(Response=>{
    this.customers = Response.data
  })
}
}
