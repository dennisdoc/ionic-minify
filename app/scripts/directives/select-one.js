(function() {
  'use strict';
angular.module('app').directive('selectone',selectone);

  function selectone() {
    'use strict';
    var directive= {
      restrict:'EA',
      scope:{
        model:'=',
        list:'=',
        selecionado:'=',
        icon:'=',
        required:'='
      },
      replace:true,
      controller:controller,
      templateUrl: './templates/directives/select-one.html'
    };

    function controller($scope,$ionicPopover){

      var template = '<ion-popover-view><ion-content style="padding:25px;" >'+
          '<ion-list >';
      angular.forEach($scope.list, function(value, key){
        template=template+
          '<ion-radio ng-click="select(selecionado)" ng-model="selecionado" ng-value="'+"'"+value+"'"+'">'+
          value+
      '</ion-radio>';
      });

      template=template+'</ion-list>'+'</ion-content></ion-popover-view>';

      $scope.select=select;
       $scope.openPopover =openPopover;

      $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
      });

      function openPopover($event) {
          $scope.popover.show($event);
      };  

      function select($value){
        $scope.selecionado=$value;
        $scope.popover.hide();
      };

    };

    return directive;
  };

})();