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
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('main.intro', {
                url: 'intro',
                templateUrl: 'views/main.intro.html'
            })
            .state('main.geo', {
                url: 'geo',
                templateUrl: 'views/geo.html'
            });
            // .state('main.intro', {
            //     url: 'intro',
            //     templateUrl: 'views/main.intro.html'
            // });
            // .state('main.intro', {
            //     url: 'intro',
            //     templateUrl: 'views/main.intro.html'
            // });                                    
        $urlRouterProvider.otherwise("/");
    });