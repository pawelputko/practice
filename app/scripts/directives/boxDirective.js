'use strict';


angular.module('practiceApp')
  	.directive('boxDirective', function () {
    	return {
        restrict: 'E',
      	scope: {
            rWidth: '=',
            rHeight: '=',
            rColor: '='
          },
        link: function($scope, element){
          element.html('<div class="box">bla bla bla</div>');         
          $('div.box').css({"background-color" : $scope.rColor, "height" : $scope.rHeight, "width" : $scope.rWidth});
         
        }
      		};
    });