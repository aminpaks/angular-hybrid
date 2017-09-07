import { Router } from '@angular/router';
import { CommonNG1Module } from './ng1-module';

// NG1 component
CommonNG1Module
    .controller('commonController', ['$scope', 'router', function ($scope, router: Router) {
        $scope.goto = function (url: string) {
            router.navigateByUrl(url);
        };
    }])
    .component('commonComponent', {
        template: require('./directive.html'),
        controller: 'commonController'
    });
