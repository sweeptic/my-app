import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/in-memory-data.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[] = [];
    constructor(private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
    }


    addHero(name: string): void {
        if (!name) return;
        this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => {
            this.heroes.push(hero);
        });
    }



}
