import {HttpRequest, HttpEvent, HttpResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {AppIdInterceptor} from './app-id.interceptor';

describe('AppIdInterceptor', () => {
  it('appends APPID query parameter to cloned request', () => {
    const interceptor = new AppIdInterceptor();
    const handlerSpy = jasmine.createSpyObj('httpHandler', ['handle']);

    const expectedObservable = of(new HttpResponse());
    handlerSpy.handle.and.returnValue(expectedObservable);

    const observable = interceptor.intercept(new HttpRequest<any>('GET', 'expectedUrl'), handlerSpy);

    expect(handlerSpy.handle).toHaveBeenCalled();
    expect(handlerSpy.handle.calls.first().args[0].url).toEqual('expectedUrl&APPID=faf17d6bfe1477a97755d5134779e59c');
    expect(observable).toBe(expectedObservable);
  });
});
