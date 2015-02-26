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
  .config(function ($stateProvider, $urlRouterProvider) {
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
  });
