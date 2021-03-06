import { Directive, ElementRef, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { downgradeInjectable } from '@angular/upgrade/static';
import { UpgradeComponent } from '@angular/upgrade/static';
import { RootNG1Module } from './ng1-module';

// NG1 component
RootNG1Module
    .factory('router', downgradeInjectable(Router))
    .component('customComponent', {
        template: `<h4>I'm an Angular1 component - <span style="color: red">{{title}}</span><br>{{goodNews}}</h4>`,
        controller: ['$scope', function ($scope) {
            $scope.title = 'I\'m living in a downgraded NG2 component; No problem!';
            $scope.goodNews = 'Good news is I\'m using old school $scope!';
        }]
    });

// Directive to turn Ng1 to Ng2
@Directive({
    selector: 'custom-ng1',
})
export class CustomNG1Directive extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('customComponent', elementRef, injector);
    }
}
