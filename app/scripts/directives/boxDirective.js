'use strict';


angular.module('practiceApp')
  	.directive('boxDirective', function () {
    	return {
    		template: '<div style="background-color : {{rColor}}; height : {{rHeight}}px; width : {{rWidth}}px"></div>',
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