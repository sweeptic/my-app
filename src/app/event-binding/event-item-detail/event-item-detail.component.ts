
import { Component, EventEmitter, Input, Output } from '@angular/core';

export class Item {
    name = '';
}


@Component({
    selector: 'app-event-item-detail',
    templateUrl: './event-item-detail.component.html',
    styleUrls: ['./event-item-detail.component.css']
})
export class EventItemDetailComponent {
    @Input() item!: Item;
    itemImageUrl = 'assets/images/teapot.svg';
    lineThrough = '';
    displayNone = '';
    @Input() prefix = '';

    // This component makes a request but it can't actually delete a hero.
    @Output() deleteRequest = new EventEmitter<Item>();

    delete() {
        this.deleteRequest.emit(this.item);
        this.displayNone = this.displayNone ? '' : 'none';
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    }
}
