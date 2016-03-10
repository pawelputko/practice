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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
