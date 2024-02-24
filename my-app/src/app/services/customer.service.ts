import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/ListResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl= 'https://localhost:44306/api/customers/getall';

  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl)
  }
}
