import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-birthday2',
    templateUrl: './herobirthday2.component.html',
})
export class Herobirthday2Component {
    birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
    toggle = true; // start with true == shortDate

    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

    toggleFormat() { this.toggle = !this.toggle; }
}
