import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../services/in-memory-data.service';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
    hero: Hero | undefined;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }


    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        this.heroService.getHero(id).subscribe((hero) => {
            this.hero = hero;
        });
    }

    getValue(event: Event) {
        return (event.target as any).value;
    }

    goBack(): void {
        this.location.back();
    }


    saveHero() {
        if (this.hero) {
            this.heroService.updateHero(this.hero).subscribe(_ => this.goBack()
            );
        }
    }


}
