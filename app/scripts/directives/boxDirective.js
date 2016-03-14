'use strict';


angular.module('practiceApp')
  	.directive('boxDirective', function () {
    	return {
    		template: '<div style="background-color : {{rColor}}; height : {{rHeight}}; width : {{rWidth}}"></div>',
      	scope: {
            rWidth: '=',
            rHeight: '=',
            rColor: '='
          },
      	replace: true,
      	controller: function ($scope) {
				    console.log($scope); 
      		}
      	};
    });