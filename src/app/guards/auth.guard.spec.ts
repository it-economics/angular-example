import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {expand} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from './auth.guard';

describe('AuthGuard', () => {
  let routerMock;
  let authServiceMock : AuthService;
  beforeEach(() => {
    routerMock = jasmine.createSpyObj('routerMock', ['navigate']);
    authServiceMock = {isLoggedIn: false} as AuthService;

  });

  it('blocks unauthenticated users', () => {
    const guard = new AuthGuard(authServiceMock, routerMock);
    const result = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(result).toBeFalsy();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login'], {replaceUrl: true});

  });

  it('allows authenticated users', () => {
    authServiceMock.isLoggedIn = true;
    const guard = new AuthGuard(authServiceMock, routerMock);
    const result = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(result).toBeTruthy();
    expect(routerMock.navigate).toHaveBeenCalledTimes(0);

  });
});
