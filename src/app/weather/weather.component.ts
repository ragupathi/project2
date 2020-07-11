import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApuxService } from "../apux.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,private apuxservice:ApuxService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
   
  }
  // sendToAPIXU(formValues) {
  //   this.apuxservice
  //     .getWeather(formValues.location)
  //     .subscribe(data => console.log(data));
  // } (result)=>{
      // console.warn(result)
    //   this.collections=result;

    // }
  sendToAPIXU(formValues){
    this.apuxservice
    .getWeather(formValues.location).subscribe((data)=> {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    // .subscribe(data => console.log(data));
      // console.log(this.weatherData);
    // this.apuxservice
    //   .getWeather(formValues.location)
    //   .subscribe(data => console.log(data));
    }

}
