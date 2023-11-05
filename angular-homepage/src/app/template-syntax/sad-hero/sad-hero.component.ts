import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-sad-hero',
  templateUrl: './sad-hero.component.html',
})
export class SadHeroComponent {
  @Input() hero!: Hero;
}
