import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {Hello2Component} from './components/hello2/hello2.component';
import {Hello3Component} from './components/hello3/hello3.component';
import {Hello4Component} from './components/hello4/hello4.component';

const helloRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hello',
        component: HelloComponent,
      },
      {
        path: 'hello2',
        component: Hello2Component,
      },
      {
        path: 'hello3',
        component: Hello3Component,
      },
      {
        path: 'hello4',
        component: Hello4Component,
      },
      {path: '', redirectTo: 'hello', pathMatch: 'full'}

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(helloRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HelloRoutingModule {
}
