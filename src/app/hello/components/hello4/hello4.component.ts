import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HelloValidators} from '../../validators/hello.validators';

@Component({
  selector: 'app-hello4',
  templateUrl: './hello4.component.html',
  styleUrls: ['./hello4.component.scss']
})
export class Hello4Component implements OnInit {

  submitted = false;

  userName: string = '';

  nameForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control([this.userName], [Validators.required, HelloValidators.forbiddenNameValidator('Alex')])
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userName = this.nameForm.get('name').value;
    console.log(this.nameForm.value);
    this.submitted = true;
  }

}
