import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import './commonalities/directive';
import { AlertsPageComponent } from './page';
import { AlertsNG1Directive } from './directive';
// import { AlertsRoutingModule} from './routing.module';
import { TestModule } from './test/module';

@NgModule({
    imports: [
        UpgradeModule,
        TestModule,
        // AlertsRoutingModule,
    ],
    declarations: [
        AlertsPageComponent,
        AlertsNG1Directive,
    ],
})
export class AlertsModule { }
