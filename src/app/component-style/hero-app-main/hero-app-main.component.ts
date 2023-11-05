import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-app-main.component.html',
})
export class HeroAppMainComponent {
  @Input() hero!: Hero;
}
