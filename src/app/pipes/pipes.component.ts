import { Component } from '@angular/core';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
    birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
