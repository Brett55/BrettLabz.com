'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
