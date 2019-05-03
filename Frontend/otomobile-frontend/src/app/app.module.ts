import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetAllCarsComponent } from '../Components/getAllCars/getAllCars.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../Components/Navbar/Navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    GetAllCarsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
