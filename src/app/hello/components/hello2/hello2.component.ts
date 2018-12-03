import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html',
  styleUrls: ['./hello2.component.scss']
})
export class Hello2Component {

  name: string;
  private showHelloComponent: boolean;

  constructor() {
  }

  sayHello() {
    this.showHelloComponent = true;
  }

  nameChanged(newName: string) {
    this.name = newName;
    console.log('name:', this.name);
  }
}
