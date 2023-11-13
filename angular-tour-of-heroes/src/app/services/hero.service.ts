import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { Hero } from './in-memory-data.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap((data) => {
                console.log('fetch data: ', data);
            })
        );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((data) => {
                    console.log('added hero:', data);
                })
            );
    }

}
