import * as angular from 'angular';
import { AlertNG1Module } from './alerts/ng1-module';

export const RootNG1Module = angular.module('angular-js-hybrid', [AlertNG1Module.name]);
