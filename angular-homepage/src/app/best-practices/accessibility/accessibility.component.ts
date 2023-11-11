import { Component } from '@angular/core';

@Component({
    selector: 'app-accessibility',
    templateUrl: './accessibility.component.html',
    styleUrls: ['./accessibility.component.css']
})
export class AccessibilityComponent {
    progress = 0;

    setProgress($event: Event) {
        this.progress = +($event.target as HTMLInputElement).value;
    }
}
