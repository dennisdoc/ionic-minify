(function() {
  'use strict';
angular.module('app').directive('iconapp',iconapp);

  function iconapp() {
    'use strict';
    var directive= {
      restrict:'EA',
      scope:{
        icon:'='
      },
      replace:true,
      controller:controller,
      templateUrl: './templates/directives/icon-app.html'
    };

    function controller($scope){

    };

    return directive;
  };

})();