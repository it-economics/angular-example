import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {WeatherService} from '../../services/weather.service';

import {WeatherComponent} from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherServiceSpy: WeatherService;

  beforeEach(async(() => {
    weatherServiceSpy = jasmine.createSpyObj('weaterServiceSpy', ['fetchWeather']);
    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      providers: [
        {provide: WeatherService, useValue: weatherServiceSpy}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
