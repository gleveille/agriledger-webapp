import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import {ToastService} from "./toast.service";

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private router:Router,private toastService:ToastService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(request.url.indexOf('reset-password')===-1){
            request = request.clone({
                setHeaders: {
                    'X-Access-Token': `${localStorage.getItem('accessToken')}`
                }
            });
        }

        return next.handle(request).do((event: HttpEvent<any>) => {

            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('userId')

                    this.router.navigate(['/login']);

                }

                if(err.status === 403){
                    this.toastService.error('Unauthorised','You are not authorised to perform this action')

                }
            }
        });
    }
}