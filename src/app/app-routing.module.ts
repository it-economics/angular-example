import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {WeatherComponent} from './weather/components/weather/weather.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {path: 'hello', loadChildren: './hello/hello.module#HelloModule',},
      {path: 'weather', component: WeatherComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: AppComponent,
    children: [
      {path: '', component: LoginComponent},
    ]
  },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {enableTracing: true})// <-- debugging purposes only)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
