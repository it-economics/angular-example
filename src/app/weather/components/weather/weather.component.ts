import {Component} from '@angular/core';
import {WeatherData} from '../../models/WeatherData';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  weatherData: WeatherData;

  constructor(private weatherService: WeatherService) {
  }

  fetchWeather() {

    this.weatherService.fetchWeather()
      .subscribe(value => {
        this.weatherData = value;
      });
  }

}
