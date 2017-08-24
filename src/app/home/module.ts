import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { HomeComponent } from './component';
// import { HomeRoutingModule } from './routing.module';

@NgModule({
    imports: [
        UpgradeModule,
        // HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule { }
