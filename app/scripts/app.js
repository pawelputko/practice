'use strict';

/**
 * @ngdoc overview
 * @name practiceApp
 * @description
 * # practiceApp
 *
 * Main module of the application.
 */
angular
  .module('practiceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/date', {
        templateUrl: 'views/date.html',
        controller: 'DateCtrl',
        controllerAs: 'date'
      })
      .when('/box', {
        templateUrl: 'views/box.html',
        controller: 'BoxCtrl',
        controllerAs: 'box'
      })
      .when('/fuck', {
        templateUrl: 'views/faaslist.html',
        controller: 'FuckCtrl',
        controllerAs: 'fuck'
      })
      .when('/fuck/detail/:name', {
        templateUrl: 'views/faasDetail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
