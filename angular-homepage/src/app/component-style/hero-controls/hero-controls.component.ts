import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-controls',
  templateUrl: './hero-controls.component.html',
})
export class HeroControlsComponent {
  @Input() hero!: Hero;

  activate() {
    this.hero.active = !this.hero.active;
  }
}
