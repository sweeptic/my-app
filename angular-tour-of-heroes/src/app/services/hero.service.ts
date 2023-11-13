import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of, tap } from 'rxjs';
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
            tap(_ => this.messageService.addMessage("fetch hero")),
            catchError(this.handleError<any>('getHeroes', []))
        );
    }

    getHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap((hero) => this.messageService.addMessage(`HeroService: Get hero ${hero}`)),
            catchError(this.handleError<any>('getHero'))
        );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((hero) => {
                    this.messageService.addMessage(`HeroService: Add hero ${hero}`),
                        catchError(this.handleError<any>('updateHero'));
                })
            );
    }


    updateHero(hero: Hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => this.messageService.addMessage(`HeroService: Update hero ${hero}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    searchHeroes(term: string) {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
            tap(_ => this.messageService.addMessage(`HeroService: Search hero term ${term}`)),
            catchError(this.handleError<any>('searchHeroes'))
        );
    }

    removeHero(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => this.messageService.addMessage(`HeroService: Deleted hero id ${id}`)),
            catchError(this.handleError<any>('removeHero'))
        );
    }


    /**
       * Handle Http operation that failed.
       * Let the app continue.
       *
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.addMessage(`HeroService: ${message}`);
    }


}
