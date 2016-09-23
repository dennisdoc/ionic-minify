(function() {
angular
  .module('app')
  .directive('iconapp', function() {
    return {
      restrict:'EA',
      scope:{
        icon:'='
      },
      replace:true,
      controller:function($scope){
        

      },
      templateUrl: './templates/directives/icon-app.html'
    };
  });

})();