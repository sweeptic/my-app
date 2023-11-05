import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styles: [],
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
}
