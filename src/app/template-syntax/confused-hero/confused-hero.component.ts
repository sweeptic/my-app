import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-confused-hero',
  templateUrl: './confused-hero.component.html',
})
export class ConfusedHeroComponent {
  @Input() hero!: Hero;
}
