import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private ngxService: NgxUiLoaderService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.ngxService.start();
        return next.handle(<any>request).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    this.ngxService.stop();
                    return request
                }
            })
        )
    }
}