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
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
    $urlRouterProvider.otherwise("/");
  });
