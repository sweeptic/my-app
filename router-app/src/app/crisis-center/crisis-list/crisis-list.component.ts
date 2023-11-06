import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { BehaviorSubject, Observable, Observer, Subject, from, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises$?: Observable<Crisis[]>;
    selectedId = 0;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // map, switchmap
        // const bs = new BehaviorSubject<number[]>([1, 2, 3]);
        // console.log('debug---');
        // const switched = of(1, 2, 3).pipe(map(x => x * 2));
        // const switched2 = of(1, 2, 3).pipe(switchMap(x => of(x * 2, x * 3)));
        // const switched3 = of(1).pipe(switchMap(x => bs));
        // switched.subscribe(x => console.log(x));
        // console.log('---');
        // switched2.subscribe(x => console.log(x));
        // console.log('---');
        // switched3.subscribe(u => console.log(u)
        // );

        // var foo = Observable.create(function (observer: { next: (arg0: number) => void; }) {
        //     console.log('Hello');
        //     observer.next(42);
        // });
        // var subject = new BehaviorSubject<any>("string");

        // subject.subscribe({
        //     next: (v) => console.log('observerA: ' + v)
        // });
        // subject.subscribe({
        //     next: (v) => {
        //         console.log('observerB: ' + v);
        //     }
        // });


        // console.log('subject value', subject.value);

        // subject.next(2);

        // var observable = from([1, 2, 3]);

        // observable.subscribe(subject);


        // console.log('--');

        // var observ = new Observable<any>((observer: any) => {
        //     observer.next(43);
        //     observer.complete();
        // });

        // observ.subscribe({
        //     next: (v) => console.log('observerA: ' + v)
        // });
        // observ.subscribe({
        //     next: (v) => console.log('observerB: ' + v)
        // });


        // var subject = new BehaviorSubject(0); // 0 is the initial value

        // subject.subscribe({
        //     next: (v) => console.log('observerA: ' + v)
        // });

        // subject.next(1);
        // subject.next(2);

        // subject.subscribe({
        //     next: (v) => console.log('observerB: ' + v)
        // });

        // subject.next(3);



        this.crises$ = this.route.firstChild?.paramMap.pipe(
            switchMap(params => {
                this.selectedId = parseInt(params.get('id')!, 10);
                return this.service.getCrises();
            })
        );
        // this.crises$ = this.service.getCrises();

    }
}
