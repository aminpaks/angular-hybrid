import { Directive, ElementRef, Injector, Inject } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Ng1Module } from 'root/ng1-module';

// NG1 component
Ng1Module
    .component('alertComponent', {
        template: `<h4><span style="color: red">{{title}}</span></h4>`,
        controller: ['$scope', function($scope) {
            $scope.title = 'Alerts - Angular1 component';
        }]
    });

// Directive to turn Ng1 to Ng2
@Directive({
  selector: 'alert-ng1',
})
export class AlertsNG1Directive extends UpgradeComponent {
  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    super('alertComponent', elementRef, injector);
  }
}
