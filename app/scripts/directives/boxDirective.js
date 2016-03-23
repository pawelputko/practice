'use strict';


angular.module('practiceApp')
  	.directive('boxDirective', function () {
    	return {
        template: '<div>bla bla bla</div>',
        restrict: 'E',
        replace: true,
      	scope: {
            rWidth: '=',
            rHeight: '=',
            rColor: '='
          },
        link: function($scope, element){
          angular.element(element[0]).css({'background-color' : $scope.rColor, 'width' : $scope.rWidth + 'px', 'height' : $scope.rHeight + 'px'})
         
        }
      		};
    });