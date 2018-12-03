import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  @Input()
  name: string;

  @Input()
  names: string[];

  constructor() { }

  get displayName(): string{
    if(!this.name){
      return 'Welt';
    }
    return this.name;
  }

}
