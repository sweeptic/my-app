import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Hero } from './in-memory-data.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(private http: HttpClient) { }


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl);


    }


}
