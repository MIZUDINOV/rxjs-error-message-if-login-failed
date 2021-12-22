import { Component, Inject } from '@angular/core';
import {
    catchError,
    ignoreElements,
    mapTo,
    Observable,
    of,
    repeat,
    retry,
    share,
    startWith,
    Subject,
    switchMap,
    switchMapTo,
    timer,
} from 'rxjs';
import { COLLAPSE } from './animation';

import { LoginService } from './login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [COLLAPSE],
})
export class AppComponent {
    readonly submit$ = new Subject<void>();

    readonly request$ = this.submit$.pipe(
        switchMapTo(this.loginService.pipe(startWith(''))),
        share()
    );

    readonly user$ = this.request$.pipe(retry());

    readonly error$ = this.request$.pipe(
        ignoreElements(),
        catchError((e) => of(e)),
        repeat(),
        switchMap((e) => timer(5000).pipe(startWith(e)))
    );

    readonly disabled$ = this.request$.pipe(
        mapTo(true),
        catchError(() => of(false)),
        repeat()
    );

    constructor(
        @Inject(LoginService) private loginService: Observable<string>
    ) {}
}
