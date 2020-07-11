import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApuxService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      // 'https://api.weatherstack.com/current?access_key=&q=' + location
      'http://api.weatherstack.com/current?access_key=4187f1384617c5a9f3cd353ae037239d&query=' +
        location
    );
  }
}
