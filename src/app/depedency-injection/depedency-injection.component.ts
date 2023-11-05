import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { UserService } from './user.service';

@Component({
    selector: 'app-depedency-injection',
    templateUrl: './depedency-injection.component.html',
})
export class DepedencyInjectionComponent {
    title: string;

    constructor(
        @Inject(APP_CONFIG) config: AppConfig,
        private userService: UserService
    ) {
        this.title = config.title;
    }

    get isAuthorized() { return this.user.isAuthorized; }
    nextUser() { this.userService.getNewUser(); }
    get user() { return this.userService.user; }

    get userInfo() {
        return `Current user, ${this.user.name}, is ` +
            `${this.isAuthorized ? '' : 'not'} authorized. `;
    }
}
