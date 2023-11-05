import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-birthday',
    templateUrl: './herobirthday1.component.html',

})
export class Herobirthday1Component {
    birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
