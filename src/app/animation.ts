import { animate, style, transition, trigger } from '@angular/animations';

export const COLLAPSE = trigger('collapse', [
    transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('.2s', style({ height: '*', opacity: 1 })),
    ]),
    transition(':leave', [
        style({ height: '*' }),
        animate('.2s', style({ height: 0, opacity: 0 })),
    ]),
]);
