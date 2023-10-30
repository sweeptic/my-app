import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  templateUrl: './shadow-dom-encapsulation.component.html',
  styles: ['h2, .shadow-message { color: blue; }'],
  //   encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent {}
