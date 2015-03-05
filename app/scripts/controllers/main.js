'use strict';

/**
 * @ngdoc function
 * @name angularifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularifyApp
 */
angular.module('angularifyApp')
  .controller('MainCtrl', function ($scope, $state, $stateParams, swapInfo) {
    $state.go('main.0');
    var mainCtrl = this;
    mainCtrl.id = 0;
    mainCtrl.moreInfo = swapInfo.moreInfo;
    mainCtrl.lessInfo = swapInfo.lessInfo;
  })
  .service('swapInfo', function($state) {
    this.moreInfo = function (id) {
      if (id < 3) {
        id++;
      }
      $state.go("main." + id);
      return id;
    };
    this.lessInfo = function (id) {
      if (id > 0) {
        id--;
      }
      $state.go("main." + id);
      return id;
    };
  });
