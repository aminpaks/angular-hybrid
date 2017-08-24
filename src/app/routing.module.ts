import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertsPageComponent } from './alerts/page';
import { HomeComponent } from './home/component';

const rootRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'alerts',
        component: AlertsPageComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRoutes, { initialNavigation: false }),
    ],
    exports: [
        RouterModule,
    ]
})
export class RootRoutingModule { }
