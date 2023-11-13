import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, tap } from 'rxjs';
import { Hero } from './in-memory-data.service';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap(_ => {
                this.messageService.addMessage("fetch hero");
            })
        );
    }

    getHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap((hero) => this.messageService.addMessage(`HeroService: Get hero ${hero}`)
            ));
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((hero) => {
                    this.messageService.addMessage(`HeroService: Add hero ${hero}`);
                })
            );
    }


    updateHero(hero: Hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => this.messageService.addMessage(`HeroService: Update hero ${hero}`)
                ));
    }

    searchHeroes(term: string) {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
            tap(_ => this.messageService.addMessage(`HeroService: Search hero term ${term}`)));
    }

    removeHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => this.messageService.addMessage(`HeroService: Deleted hero id ${id}`)));
    }

}
