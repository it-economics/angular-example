import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MockDirective} from 'ng-mocks';
import {ForbiddenNameValidatorDirective} from '../../directives/forbidden-name-validator.directive';

import {Hello3Component} from './hello3.component';

describe('Hello3Component', () => {
  let component: Hello3Component;
  let fixture: ComponentFixture<Hello3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Hello3Component,
        MockDirective(ForbiddenNameValidatorDirective)
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
