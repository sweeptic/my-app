import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY, Observable, from, interval, merge, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, tap } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

export const crisisDetailResolver: ResolveFn<Crisis> = (route: ActivatedRouteSnapshot) => {
    const router = inject(Router);
    const cs = inject(CrisisService);
    const id = route.paramMap.get('id')!;

    // concat;
    // concatMap;
    // merge;
    // mergeMap;

    // const series1$ = interval(1000).pipe(map(val => val * 10));
    // const series2$ = interval(1000).pipe(map(val => val * 100));

    // const result$ = merge(series1$, series2$);
    // const result$2 = series1$.pipe(mergeMap(series1 => of(series2$.pipe(map((i) => i * series1)))));

    const res = cs.getCrisis(id).pipe(mergeMap(crisis => {
        console.log('crisis', crisis);

        if (crisis) {
            return of(crisis);
        } else {  // id not found
            router.navigate(['/crisis-center']);
            return EMPTY;
        }
    }));

    // const interval$ = interval(1000);
    // const result = interval$.pipe(
    //     mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : EMPTY),
    // );
    // result.subscribe(x => console.log(x));

    // const res2 = cs.getCrisis(id).pipe(map(crisis => {
    //     console.log('crisis', crisis);

    //     if (crisis) {
    //         return (crisis);
    //     } else {  // id not found
    //         router.navigate(['/crisis-center']);
    //         return EMPTY;

    //     }
    // }));

    //     const http: any = 'a'

    //     const http$: Observable<any[]> = http.get('/api/courses');

    //    const r =  http$
    //         .pipe(
    //             tap(() => console.log('HTTP request executed')),
    //             map(res => Object.values(res['payload']))
    //         )

    // return res;
    return res;
};
