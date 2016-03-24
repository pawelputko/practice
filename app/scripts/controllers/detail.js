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
    .controller('DetailCtrl', function ($scope, $routeParams) {
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
                
    
 });