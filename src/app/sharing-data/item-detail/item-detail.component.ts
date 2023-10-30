import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styles: [],
})
export class ItemDetailComponent {
  @Input() item = ''; // decorate the property with @Input()
}
