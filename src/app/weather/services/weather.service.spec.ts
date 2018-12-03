import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {WeatherData} from '../models/WeatherData';

import {WeatherService} from './weather.service';

describe('WeatherService', () => {

  describe('tested by HttpClientTestingModule', () => {

    let service: WeatherService;
    let httpMock: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    }));

    beforeEach(inject([WeatherService, HttpTestingController], (s: WeatherService, h: HttpTestingController) => {
      service = s;
      httpMock = h;
    }));

    it('calls http testing controller', () => {
      service.fetchWeather().subscribe((value: WeatherData) => expect(value).toEqual({
        'temp': 42,
        'temp_min': 3,
        'temp_max': 47
      } as WeatherData));

      const req = httpMock.expectOne('http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric');
      expect(req.request.method).toEqual('GET');
      req.flush({main: {'temp': 42, 'temp_min': 3, 'temp_max': 47}});
      httpMock.verify();
    });

  });

  describe('tested by service spy', () => {

    it('calls httpClients get', () => {
      const httpClientSpy = jasmine.createSpyObj('httpClientSpy', ['get']);
      httpClientSpy.get.and.returnValue(of({main: {'temp': 42, 'temp_min': 3, 'temp_max': 47}}));
      let service = new WeatherService(httpClientSpy);
      service.fetchWeather().subscribe((value: WeatherData) => expect(value).toEqual({
        'temp': 42,
        'temp_min': 3,
        'temp_max': 47
      } as WeatherData));
      expect(httpClientSpy.get).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric');
    });

  });
});
