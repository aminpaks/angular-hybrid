import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AlertsPageComponent } from './page';
import { AlertsNG1Directive } from './directive';
// import { AlertsRoutingModule} from './routing.module';

@NgModule({
    imports: [
        UpgradeModule,
        // AlertsRoutingModule,
    ],
    declarations: [
        AlertsPageComponent,
        AlertsNG1Directive,
    ],
})
export class AlertsModule { }
