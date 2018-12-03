import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  authenticatedUser: string;

  constructor() {
  }

  login(userName: string, password: string): Observable<boolean> {
    if (password === 'secret') {
      return of(true).pipe(tap(() => {
        this.isLoggedIn = true;
        this.authenticatedUser = userName;
      }));
    }
    return of(false);
  }
}
