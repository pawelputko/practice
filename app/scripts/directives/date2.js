'use strict';


angular.module('practiceApp')
  	.directive('dateB', function () {
    	return {
    		template: '<span>{{date}}</span>',
      		restrict: 'E',
      		scope: {},
      		replace: true,
      		controller: function ($scope) {
				$scope.date = moment().format('dddd MMMM YYYY');
      		}
      	};
    });