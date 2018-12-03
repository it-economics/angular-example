import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  error: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName, this.password).subscribe(value => {
      if (value === true) {
        this.router.navigate([''], {replaceUrl: true});
      } else {
        this.error = 'Die Anmeldung war nicht erfolgreich. Haben sie ein falsches Passwort benutzt?';
      }
    });
  }

}
