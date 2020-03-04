import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import * as $ from 'jquery';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentUser: User;

    innerWidth: number;
    status: boolean;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;

        if (innerWidth < 768) {
            this.status = false;
        }

    }

    sidebarToggle() {
        this.status = !this.status;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}