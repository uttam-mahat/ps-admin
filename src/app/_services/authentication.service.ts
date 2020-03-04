﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userName: string, password: string) {
        return this.http.post<any>(environment.url + 'api/AppUsers/Login', { userName, password })
            .pipe(map(user => {
                if (user.isLoginValid != true) {
                    alert("Invalid Login.")
                }
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    const currentUser = {
                        id: user.userId,
                        username: userName,
                        token: user.token,
                        profileImage: "",
                        permissions: user.permissions.map(({ id }) => id),
                        userType: user.userType
                    };

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    this.currentUserSubject.next(currentUser);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.clear();
        this.currentUserSubject.next(null);
        this.router.navigate(['/login'])
    }
}