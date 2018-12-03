import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from 'ng-mocks';
import {HelloComponent} from '../hello/hello.component';
import {NameInputComponent} from '../name-input/name-input.component';

import {Hello2Component} from './hello2.component';

describe('Hello2Component', () => {
  let component: Hello2Component;
  let fixture: ComponentFixture<Hello2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Hello2Component,
        MockComponent(HelloComponent),
        MockComponent(NameInputComponent)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
