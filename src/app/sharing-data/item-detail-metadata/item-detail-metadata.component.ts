import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-item-detail-metadata',
  templateUrl: './item-detail-metadata.component.html',
  styles: [],
})
export class ItemDetailMetadataComponent {
  @Input({ required: true }) item!: string; // Second, decorate the property with required metadata

  @Input({ transform: booleanAttribute }) itemAvailability!: boolean; // Second, decorate the property with transform
}
