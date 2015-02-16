'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
    .controller('MainCtrl', function($scope, $state, $stateParams) {
        $state.go('main.0');

        $scope.id = 0;

        $scope.moreInfo = function() {
        	if ($scope.id < 3) {	
	        	$scope.id++;
	        	$state.go("main." + $scope.id);
	        }
        };

        $scope.lessInfo = function() {
        	if ($scope.id > 0) {	
	        	$scope.id--;
	        	$state.go("main." + $scope.id);
	        }
        };
    });