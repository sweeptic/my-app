import { Component, Input } from '@angular/core';


export interface Item {
    id: number;
    name: string;
}



export const ITEMS: Item[] = [
    { id: 11, name: 'bottle' },
    { id: 12, name: 'boombox' },
    { id: 13, name: 'chair' },
    { id: 14, name: 'fishbowl' },
    { id: 15, name: 'lamp' },
    { id: 16, name: 'tv' },
    { id: 17, name: 'mug' },
    { id: 18, name: 'paintbrush' },
    { id: 19, name: 'plant' },
    { id: 20, name: 'teapot' }
];



@Component({
    selector: 'app-prop-item-list',
    templateUrl: './prop-item-list.component.html',
})
export class PropItemListComponent {
    listItems = ITEMS;
    @Input() items: Item[] = [];

}
