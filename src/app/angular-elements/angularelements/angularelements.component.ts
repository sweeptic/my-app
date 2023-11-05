import { Component, Injector } from '@angular/core';
import { PopupService } from '../popup.service';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from '../popup/popup.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-angularelements',
  templateUrl: './angularelements.component.html',
  providers: [PopupService],
})
export class AngularelementsComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
