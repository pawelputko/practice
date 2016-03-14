'use strict';


angular.module('practiceApp')
  	.directive('dateA', function () {
    	return {
    		template: '<span>{{date}}<span>',
      	restrict: 'E',
      	scope: {
            momentFormat: '='
          },
      	replace: true,
      	controller: function ($scope) {
				    $scope.date = moment($scope).format($scope.momentFormat);
      		}
      	};
    });