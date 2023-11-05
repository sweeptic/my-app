import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-happy-hero',
  templateUrl: './happy-hero.component.html',
})
export class HappyHeroComponent {
  @Input() hero!: Hero;
}
