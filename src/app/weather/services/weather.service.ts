import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {WeatherData} from '../models/WeatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric';

  constructor(private httpClient: HttpClient) { }

  fetchWeather():Observable<WeatherData> {

    return this.httpClient.get(this.weatherApiUrl)
      .pipe(
        tap(data => console.dir(data)),
        map(data => <WeatherData>data['main'])
      );
  }
}
