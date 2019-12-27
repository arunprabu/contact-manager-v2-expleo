import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, 
    HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        // access the token from the storage 
        let _bearerToken = localStorage.getItem('authToken');
        // clone the req, in order to modify req header 
        req = req.clone({     // and then, inside the cloned req, attach the token 
            setHeaders: {
                Authorization: 'Bearer ' + _bearerToken
            }
        })

        console.log(req);
        return next.handle(req);
    }
}