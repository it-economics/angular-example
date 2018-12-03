import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HelloComponent} from './components/hello/hello.component';
import {Hello2Component} from './components/hello2/hello2.component';
import {Hello3Component} from './components/hello3/hello3.component';
import {NameInputComponent} from './components/name-input/name-input.component';
import {ForbiddenNameValidatorDirective} from './directives/forbidden-name-validator.directive';
import {HelloRoutingModule} from './hello-routing.module';
import { Hello4Component } from './components/hello4/hello4.component';

@NgModule({
  declarations: [
    HelloComponent,
    Hello2Component,
    Hello3Component,
    NameInputComponent,
    ForbiddenNameValidatorDirective,
    Hello4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    HelloRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HelloComponent,
    Hello2Component,
    Hello3Component,
    Hello4Component
  ]
})
export class HelloModule { }
