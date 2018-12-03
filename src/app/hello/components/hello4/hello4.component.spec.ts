import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

import {Hello4Component} from './hello4.component';

describe('Hello4Component', () => {
  let component: Hello4Component;
  let fixture: ComponentFixture<Hello4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Hello4Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
