'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # DateCtrl
 * Controller of the practiceApp
 */
angular
	.module('practiceApp')
    .controller('DetailCtrl', function ($scope, $routeParams, $http) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'angularMoment'
    ];

        $scope.example = {
            text: ''
        }
        var self = this;
        self.name = $routeParams.name;
        
        $scope.myFunc = function(){
            $http.get('https://foaas.com/' + self.name + '/' + $scope.example.text).then(function (data) { 
                console.log(data);
                $scope.gowno = data.data;
            });
        };
    
 });