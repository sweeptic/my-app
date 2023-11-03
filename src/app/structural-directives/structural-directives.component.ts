import { Component } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './hero';




@Component({
    selector: 'app-structural-directives',
    templateUrl: './structural-directives.component.html',
    styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
    heroes = heroes;
    hero: Hero | null = this.heroes[0];
    condition = false;
    logs: string[] = [];
    showSad = true;
    status = 'ready';

    trackById(index: number, hero: Hero): number { return hero.id; }
}
