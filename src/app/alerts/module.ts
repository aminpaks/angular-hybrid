import './common/directive';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AlertsPageComponent } from './page';
import { AlertsNG1Directive } from './directive';
import { TestModule } from './test/module';

@NgModule({
    imports: [
        UpgradeModule,
        TestModule,
    ],
    declarations: [
        AlertsPageComponent,
        AlertsNG1Directive,
    ],
})
export class AlertsModule { }
