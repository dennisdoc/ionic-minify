(function() {
angular
  .module('app')
  .directive('selectone', function() {
    return {
      restrict:'EA',
      scope:{
        model:'=',
        list:'=',
        selecionado:'=',
        icon:'=',
        required:'='
      },
      replace:true,
      controller:function($scope,$ionicPopover){

        var template = '<ion-popover-view><ion-content style="padding:25px;" >'+
        		'<ion-list >';
        angular.forEach($scope.list, function(value, key){
        	template=template+
        		'<ion-radio ng-click="select(selecionado)" ng-model="selecionado" ng-value="'+"'"+value+"'"+'">'+
				  	value+
				'</ion-radio>';
        });

		template=template+'</ion-list>'+'</ion-content></ion-popover-view>';

		$scope.popover = $ionicPopover.fromTemplate(template, {
			scope: $scope
		});

		$scope.openPopover = function($event) {
		    $scope.popover.show($event);
		};

		$scope.select=function($value){
			$scope.selecionado=$value;
			$scope.popover.hide();
		};

      },
      templateUrl: './templates/directives/select-one.html'
    };
  });

})();