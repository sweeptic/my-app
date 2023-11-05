import { Component } from '@angular/core';
import { HEROES } from '../hero/hero.component';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styles: [],
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
