import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styles: ['h2, .none-message { color: red; }'],
  //   encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {}
