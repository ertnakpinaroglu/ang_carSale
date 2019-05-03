import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../Models/Car.model';
import { CarsService } from '../../Services/Cars.service';

@Component({
  selector: 'app-getAllCars',
  templateUrl: './getAllCars.component.html',
  styleUrls: ['./getAllCars.component.css'],
  providers: [CarsService]
})
export class GetAllCarsComponent implements OnInit {

  constructor(private carServices: CarsService) { }

  allCars: CarModel[];

  ngOnInit() {
    this.getAllCars();
    // allCars=["ali","veli"];
  }

  getAllCars() {
    this.carServices.getAllCars().subscribe(allData => {
      this.allCars = allData;
    });
  }

}
