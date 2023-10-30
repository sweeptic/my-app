import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
})
export class HeroTeamComponent {
  @Input() hero!: Hero;
}
