import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';

import { RootModule } from './app/module';
import { RootComponent } from './app/component';
import { Ng1Module } from './app/ng1-module';

Ng1Module
    .controller('ng1-root-controller', function() { })
    .directive('rootComponent', downgradeComponent({
        component: RootComponent
    }));

platformBrowserDynamic().bootstrapModule(RootModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, [Ng1Module.name], { strictDi: true });
});
