import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { EMPTY, Observable, of, tap } from 'rxjs';
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

    getHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap((hero) => console.log(`hero founded=${hero}`)
            ));
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((data) => {
                    console.log('added hero:', data);
                })
            );
    }


    updateHero(hero: Hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => console.log('update hero')
                ));


    }

    searchHeroes(term: string) {
        console.log('call search ', term);

        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`);


    }

    removeHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => {
                console.log(`deleted hero id=${id}`);
            }));
    }

}
