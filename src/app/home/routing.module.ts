import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component';

const rootRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
export class HomeRoutingModule { }
