import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private router:Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'X-Access-Token': `${localStorage.getItem('accessToken')}`
            }
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
            console.log('interceptor')

            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                  console.log('interceptor 401')
                    // redirect to the login route
                    // or show a modal
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('userId')

                    this.router.navigate(['/login']);

                }
            }
        });
    }
}