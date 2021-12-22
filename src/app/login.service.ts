import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService extends Observable<string> {
    constructor() {
        super((subscriber) =>
            of(Math.random())
                .pipe(
                    tap(() => console.log('Выполняется вход...')),
                    delay(1000),
                    map((response) => {
                        if (response > 0.5) {
                            throw new Error('Ошибка при входе!');
                        }
                        return 'Muhammad Izudinov';
                    })
                )
                .subscribe(subscriber)
        );
    }
}
