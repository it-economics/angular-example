import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent {

  value: string;

  @Output()
  submitted = new EventEmitter();

  @Output()
  textEntered = new EventEmitter();

  constructor() {
  }


  onKey(event: string) {
    this.value = event;
    this.textEntered.emit(this.value);
  }

  onEnter() {
    this.submitted.emit();
  }
}
