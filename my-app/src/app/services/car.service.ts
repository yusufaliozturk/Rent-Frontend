import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl= 'https://localhost:44306/api/';

  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  Getbybrand(brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/Getbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
} 