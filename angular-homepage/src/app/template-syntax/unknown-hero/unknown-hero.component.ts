import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-unknown-hero',
  templateUrl: './unknown-hero.component.html',
})
export class UnknownHeroComponent {
  @Input() hero!: Hero;
  get message() {
    return this.hero && this.hero.name
      ? `${this.hero.name} is strange and mysterious.`
      : 'Are you feeling indecisive?';
  }
}
