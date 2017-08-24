import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
        <h3>Full Angular 4 Page</h3>
        <div>{{index}}</div>
    `,
})
export class HomeComponent {
    index = 'TEST Angular 2';
}
