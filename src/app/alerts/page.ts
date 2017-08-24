import { Component } from '@angular/core';

// Page component NG2
@Component({
  selector: 'alert-page-component',
  template: `
    <alert-ng1></alert-ng1>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AlertsPageComponent { }
