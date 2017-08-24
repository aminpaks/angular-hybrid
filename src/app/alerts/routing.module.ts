import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertsPageComponent } from './page';

const rootRoutes: Routes = [
  {
    path: '',
    component: AlertsPageComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(rootRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AlertsRoutingModule { }
