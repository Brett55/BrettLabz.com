'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
    .controller('MainCtrl', function($scope, $state) {
        $state.go('main.intro');
    });