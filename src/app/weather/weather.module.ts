import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherComponent} from './components/weather/weather.component';
import {AppIdInterceptor} from './interceptors/app-id.interceptor';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppIdInterceptor, multi: true}
  ],
  exports: [WeatherComponent]
})
export class WeatherModule {
}
