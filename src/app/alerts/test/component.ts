import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `
        <h3>Full Angular 4 Page</h3>
        <div>{{index}}</div>
    `,
})
export class TestComponent {
    index = 'This is an Angular 4 component fully functional within an AngularJS component!';
}
