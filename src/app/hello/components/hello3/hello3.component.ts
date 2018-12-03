import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello3',
  templateUrl: './hello3.component.html',
  styleUrls: ['./hello3.component.scss']
})
export class Hello3Component {

  submitted = false;

  userName: string = '';

  onSubmit() {
    this.submitted = true;
  }

}
