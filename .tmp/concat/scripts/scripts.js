'use strict';

/**
 * @ngdoc overview
 * @name angularifyApp
 * @description
 * # angularifyApp
 *
 * Main module of the application.
 */
angular
    .module('angularifyApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('main.0', {
                url: 'intro',
                templateUrl: 'views/main.intro.html'
            })
            .state('main.1', {
                url: 'geo',
                templateUrl: 'views/geo.html'
            })
            .state('main.2', {
                url: 'dev',
                templateUrl: 'views/dev.html'
            })
            .state('main.3', {
                url: 'projects',
                templateUrl: 'views/projects.html'
            });                                            
        $urlRouterProvider.otherwise("/");
    }]);
'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
    .controller('MainCtrl', ["$scope", "$state", "$stateParams", function($scope, $state, $stateParams) {
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
    }]);
'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
    .controller('AboutCtrl', ["$scope", function($scope) {}]);