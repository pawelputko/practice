'use strict';


angular.module('practiceApp')
  	.directive('dateA', function () {
    	return {
    		template: '<span>{{date}}</span>',
      		restrict: 'E',
      		scope: {},
      		replace: true,
      		controller: function ($scope) {
				$scope.date = moment().startOf('hour').fromNow();
      		}
      	};
    });