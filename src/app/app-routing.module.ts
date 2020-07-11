import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from "./weather/weather.component";



const routes: Routes = [ { path: '', component: WeatherComponent }];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
