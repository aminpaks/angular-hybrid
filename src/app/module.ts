import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { RootComponent } from './component';
import { CustomNG1Directive } from './directive';
import { RootRoutingModule } from './routing.module';
import { AlertsModule } from './alerts/module';
import { HomeModule } from './home/module';

@NgModule({
    imports: [
        UpgradeModule,
        BrowserModule,
        CommonModule,
        RootRoutingModule,
        HomeModule,
        AlertsModule,
    ],
    declarations: [
        RootComponent,
        CustomNG1Directive,
    ],
    entryComponents: [
        RootComponent,
    ]
})
export class RootModule {
    ngDoBootstrap() {}
}
