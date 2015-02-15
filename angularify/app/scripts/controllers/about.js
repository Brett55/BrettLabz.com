'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
