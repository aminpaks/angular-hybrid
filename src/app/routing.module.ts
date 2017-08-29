import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertsPageComponent } from './alerts/page';
import { HomeComponent } from './home/component';
import { TestComponent } from './alerts/test/component';

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
        children: [
            {
                path: '',
                component: AlertsPageComponent,
            },
            {
                path: 'test',
                component: TestComponent,
            }
        ]
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
