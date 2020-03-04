import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { AuthenticationService } from '@app/_services';
import Swal from 'sweetalert2';
import { empty } from 'rxjs';
import { AuthenticationService } from '../_services';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // console.log(err);
            if (!err.error)
                Swal.fire("Unknown error, Contact administrator.");
            else if (err.status === 401) {
                // auto logout if 401 response returned from api
                // Swal.fire(err.error.message);
                Swal.fire("Please login.")
                this.authenticationService.logout();
                location.reload(true);
            }
            else if (err.status === 403) {
                Swal.fire('You are not authorized.');
            }
            else if (err.status === 400 || err.status === 404) {
                console.log(err);
                let msg = err.error.message || "Not found";
                let description = null;
                if (err.error.description)
                    description = (err.error.description).replace('[', "").replace(']', "").replace(/"/g, "") || null;

                Swal.fire(msg, description);
            }
            else if (err.status === 500) {
                Swal.fire(err.error.message);
            }
            else {
                const error = err.error.message || err.statusText;
                return throwError(error);
            }
            return empty();
        }))
    }
}