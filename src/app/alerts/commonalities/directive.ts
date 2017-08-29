import { Ng1Module } from 'root/ng1-module';
import { Router } from '@angular/router';

// NG1 component
Ng1Module
    .controller('commonController', ['$scope', 'router', function ($scope, router: Router) {
        $scope.goto = function (url: string) {
            router.navigateByUrl(url);
        };
    }])
    .component('commonComponent', {
        template: require('./directive.html'),
        controller: 'commonController'
    });
