import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-prop-item-detail',
    templateUrl: './prop-item-detail.component.html',
})
export class PropItemDetailComponent {
    @Input() childItem = '';

    // items = ITEMS;


    currentItem = 'bananas in boxes';

}
