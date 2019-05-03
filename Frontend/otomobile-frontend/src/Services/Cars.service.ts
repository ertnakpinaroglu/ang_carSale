import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from 'src/Models/Car.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  getAllCars(): Observable<CarModel[]> {
    return this.httpClient.get<CarModel[]>("http://localhost:8000/");
  }

}
