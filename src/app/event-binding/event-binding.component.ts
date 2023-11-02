import { Component } from '@angular/core';
import { Item } from './event-item-detail/event-item-detail.component';


@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
    currentItem = { name: 'teapot' };
    clickMessage = '';

    onSave(event?: MouseEvent) {
        const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
        alert('Saved.' + evtMsg);
        if (event) { event.stopPropagation(); }
    }

    deleteItem(item: Item) {
        alert(`Delete the ${item.name}.`);
    }

    onClickMe(event?: MouseEvent) {
        const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className : '';
        alert('Click me.' + evtMsg);
    }

    getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
    }
}
