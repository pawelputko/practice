'use strict';


angular.module('practiceApp')
    .directive('faasList', function () {
      return {
        templateUrl: 'views/faas-list.html',
        restrict: 'E',
        scope: {},
        controller: function ($scope, $http) {
            $http.get('https://foaas.com/operations?callback=?').then(function(response){
              $scope.myData = response.data;
            })
          }
        };
    });