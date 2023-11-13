import { Component } from '@angular/core';
import { Hero } from '../services/in-memory-data.service';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    heroes: Hero[] | undefined;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().subscribe((data) => {
            console.log('data', data);
            this.heroes = data.slice(0, 4);
        });
    }

}
