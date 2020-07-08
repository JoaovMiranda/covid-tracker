import {
  trigger,
  transition,
  style,
  query,
  animate
} from '@angular/animations';

export const fader =
  trigger('routeAnimations',
    [transition('* <=> *',
      [query(':enter, :leave',
        [style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0,
        }),
        ]),
      query(':enter', [animate('200ms ease', style({ opacity: 1 }))])
      ])
    ]);
