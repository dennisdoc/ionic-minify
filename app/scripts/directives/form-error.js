(function() {
	'use strict';
angular.module('app').directive('form-validation',formValidation);

  	function formValidation() {
  		'use strict';
	    var directive= {
	        restrict: 'A',
	        require: 'ngModel', // require the ngModel controller so you can plug into validation
			link: link 
	    };

	    function link(scope, element, attrs, ctrl){            
	            function validate(value) {
	                return value == 'test' || value == null;
	            }
	            ctrl.$parsers.unshift(function(value) {
	                var valid = validate(value);
	                
	                ctrl.$setValidity('form-validation', valid);
	             
	                return valid ? value : undefined;
	            });
	            
	            ctrl.$formatters.unshift(function(value) {
	                
	                ctrl.$setValidity('form-validation', validate(value));
	                return value;
	            });
	        }

	    };

	    return directive;
  	};

})();