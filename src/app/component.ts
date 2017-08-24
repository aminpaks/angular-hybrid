import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'root-component',
    template: `
        <h1>Root component ({{ngVersion}})</h1>
        <button (click)="goto('/')">Root</button>
        <button (click)="goto('/home')">Home</button>
        <button (click)="goto('/alerts')">Alerts</button>
        <router-outlet></router-outlet>
    `,
})
export class RootComponent {
    ngVersion = VERSION.full;

    constructor(private router: Router) {
        router.initialNavigation();
    }

    goto(dest: string): void {
        this.router.navigateByUrl(dest);
    }
}
