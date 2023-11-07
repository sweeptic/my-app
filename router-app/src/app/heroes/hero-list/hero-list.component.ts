// TODO: Feature Componetized like CrisisCenter
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes$!: Observable<Hero[]>;
    selectedId = 0;

    constructor(
        private service: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log('route', this.route.paramMap);

        this.heroes$ = this.route.paramMap.pipe(
            switchMap(params => {
                const selI = parseInt(params.get('id')!, 10);
                // console.log('selI', selI, params.get('id'));
                this.selectedId = selI;
                return this.service.getHeroes();
            })
        );
    }
}
