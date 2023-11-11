import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-example-progressbar',
    templateUrl: './example-progressbar.component.html',
    styleUrls: ['./example-progressbar.component.css'],
    host: {
        // Sets the role for this component to "progressbar"
        role: 'progressbar',

        // Sets the minimum and maximum values for the progressbar role.
        'aria-valuemin': '0',
        'aria-valuemax': '100',

        // Binding that updates the current value of the progressbar.
        '[attr.aria-valuenow]': 'value',
    },
})
export class ExampleProgressbarComponent {
    @Input() value = 0;
}
