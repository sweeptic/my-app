import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../services/in-memory-data.service';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
    hero: Hero | undefined;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService) { }


    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        this.heroService.getHero(id).subscribe((hero) => {
            this.hero = hero;
        });
    }


}
