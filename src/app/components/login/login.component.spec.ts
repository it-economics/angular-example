import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {AuthService} from '../../services/auth.service';

import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock;
  let authServiceMock;


  beforeEach(async(() => {
    routerMock = jasmine.createSpyObj('routerMock', ['navigate']);
    authServiceMock = jasmine.createSpyObj('authServiceMock', ['login']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useValue: authServiceMock},
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.userName = 'expectedUserName';
    component.password = 'expectedPasswort';
    authServiceMock.login.and.returnValue(of(true));

    component.login();

    expect(authServiceMock.login).toHaveBeenCalledWith('expectedUserName', 'expectedPasswort');
    expect(routerMock.navigate).toHaveBeenCalledWith([''], {replaceUrl: true});
  });
});
