import { Component, ViewEncapsulation } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Covid19 Tracker Brazil';

  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => { this.loadingChange(event) });
  }

  private loadingChange(event: Event): void {
    const active = event instanceof NavigationStart;
    const desactive = event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError;

    if (active) {
      this.isLoading = true;
    } else if (desactive) {
      this.isLoading = false;
    }
  }
}
