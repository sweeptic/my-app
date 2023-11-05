import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
    selector: 'app-item-detail-directives',
    templateUrl: './item-detail-directives.component.html',
})
export class ItemDetailDirectivesComponent {

    @Input() item!: Item;

}
