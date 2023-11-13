import { Component } from '@angular/core';
import { Observable, Subject, concatMap, debounceTime, distinctUntilChanged, mergeMap, switchMap } from 'rxjs';
import { Hero } from '../services/in-memory-data.service';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
    private searchTerm = new Subject<string>();
    heroes$!: Observable<Hero[]>;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroes$ = this.searchTerm.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }

    search(data: string) {
        console.log(data);
        this.searchTerm.next(data);
    }



}
